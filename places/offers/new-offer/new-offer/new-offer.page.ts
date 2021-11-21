import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import {PlacesService} from "../../../places/services/places.service";
import {PlaceLocation} from '../../../../shared/pickers/location-picker/models/location.model';

function base64toBlob(base64Data, contentType) {
  contentType = contentType || '';
  const sliceSize = 1024;
  const byteCharacters = atob(base64Data);
  const bytesLength = byteCharacters.length;
  const slicesCount = Math.ceil(bytesLength / sliceSize);
  const byteArrays = new Array(slicesCount);

  for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    const begin = sliceIndex * sliceSize;
    const end = Math.min(begin + sliceSize, bytesLength);

    const bytes = new Array(end - begin);
    for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
      bytes[i] = byteCharacters[offset].charCodeAt(0);
    }
    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }
  return new Blob(byteArrays, { type: contentType });
}

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {

  form: FormGroup;

  newOfferForm: FormGroup;

  enabled = false;

  constructor(private placesService: PlacesService,
              private toastController: ToastController,
              private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      }),
      price: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)]
      }),
      dateFrom: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      dateTo: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      location: new FormControl(null, {
        validators: [Validators.required]
      }),
      image: new FormControl(null)
    });
  }

  createOffer() {
    if (this.form.invalid || !this.form.get('image').value) {
      console.log('runing err', this.form.invalid, this.form.get('image').value);
      return;
    }

    this.placesService.uploadImage(this.form.get('image').value).subscribe(res => {
      this.uploadForm(res.imageUrl);
    });
  }

  uploadForm(imageUrl) {
    this.placesService.addPlace(this.form.value.title, this.form.value.description, this.form.value.price, new Date(this.form.value.dateFrom), new Date(this.form.value.dateTo), this.form.value.location, imageUrl).subscribe(resOffer => {
      console.log('offer res is ', resOffer);
    });

    const presentToast = async () => {
      const toast = await this.toastController.create({
        message: 'Place added successfully.',
        duration: 1000
      });
      toast.present();
      this.form.reset();
      this.router.navigate(['/places/offers']);
    };
    presentToast();
  }

  locationPicked(location: PlaceLocation) {
    console.log('location data is ', location);
    this.form.patchValue({
      location
    });
  }

  imagePicked(e: string | File) {
    console.log('event is ', e);
    let imageFile;
    if (typeof e === 'string') {
      try {
        // remove prefix appended to string by camera
        imageFile = base64toBlob(e.replace('data:image/jpeg;base64,', ''), 'image/jpeg');
        console.log('running 2');
      } catch(err) {
        console.log(err);
        return;
      }
    } else {
      imageFile = e;
      console.log('running 3');
    }
    this.form.patchValue({
      image: imageFile
    });
  }

  validateForm() {
    this.form.valueChanges.subscribe( () => {
      if (this.form.valid && this.form.get('image')) {
        this.enabled = false;
      }
    });
  }

}
