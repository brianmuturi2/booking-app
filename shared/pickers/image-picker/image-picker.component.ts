import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
})
export class ImagePickerComponent implements OnInit, OnChanges {

  @Output() imagePicker = new EventEmitter<string | File>();
  @ViewChild('filePicker') filePicker: ElementRef<HTMLInputElement>;
  @Input() showPreview = false;
  imageFile: any;

  usePicker = false;

  constructor(private alertCtrl: AlertController,
              private platform: Platform) { }

  ngOnInit() {
    console.log('Mobile:', this.platform.is('mobile'));
    console.log('Hybrid:', this.platform.is('hybrid'));
    console.log('Ios:', this.platform.is('ios'));
    console.log('Android:', this.platform.is('android'));
    console.log('Desktop:', this.platform.is('desktop'));
    if ((!this.platform.is('mobile') && !this.platform.is('hybrid')) || this.platform.is('desktop')) {
      this.usePicker = true;
    }
  }

  ngOnChanges() {
    if (!this.showPreview) {
      this.imageFile = '';
    }
  }

  async takePhoto() {
    if (!Camera || this.usePicker) {
      this.filePicker.nativeElement.click();
    } else {
      try {
        const image = await Camera.getPhoto({
          quality: 50,
          allowEditing: true,
          resultType: CameraResultType.DataUrl,
          source: CameraSource.Prompt,
          correctOrientation: true,
          height: 320,
          width: 200
        });
        this.imageFile = image.dataUrl;
        console.log('my image is ', this.imageFile);
        this.imagePicker.emit(this.imageFile);
      } catch (e) {
        const alert = await this.alertCtrl.create({
          message: e.message,
          buttons: [
            {
              text: 'Okay',
              handler: () => {
                alert.dismiss();
              }
            }
          ]
        });
        await alert.present();
      }
    }
  }

  resetImage() {

  }

  deletePhoto() {
    this.imageFile = '';
  }

  onFileChosen(e) {
    console.log('file event is ', e);
    const pickedFile = (e.target as HTMLInputElement).files[0];
    if (!pickedFile) {
      return;
    }
    const fr = new FileReader();
    // onload will be executed once file reader is done with conversion to base 64
    fr.onload = () => {
      const dataUrl = fr.result.toString();
      this.imageFile = dataUrl;
      this.imagePicker.emit(pickedFile);
    };
    fr.readAsDataURL(pickedFile);
  }

}
