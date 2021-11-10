import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import {PlacesService} from "../../../places/services/places.service";

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {

  form: FormGroup;

  newOfferForm: FormGroup;

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
      })
    });
  }

  createOffer() {
    console.log('form is ',this.form.value);
    this.placesService.addPlace(this.form.value.title, this.form.value.description, this.form.value.price, new Date(this.form.value.dateFrom), new Date(this.form.value.dateTo)).subscribe(res => {
      console.log('res is ', res);
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

}
