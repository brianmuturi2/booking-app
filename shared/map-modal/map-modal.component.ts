import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { keys } from 'src/environments/environment';


@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss'],
})
export class MapModalComponent implements OnInit, AfterViewInit {

  @ViewChild('map', {static: false}) mapElementRef: ElementRef;
  constructor(private modalCtrl: ModalController,
              private toastCtrl: ToastController,
              private renderer: Renderer2) { }

  ngOnInit() {}

  ngAfterViewInit() {
    // consume map sdk once it has been resolved
    this.getMaps().then(googleMaps => {
      // create google maps view from resolved sdk
      const mapEl = this.mapElementRef.nativeElement;
      const map = new googleMaps.Map(mapEl, {
        center: {lat: -1.2856, lng: 36.8259},
        zoom: 16
      });

      // add visible css class to make the map visible once loaded
      googleMaps.event.addListenerOnce(map, 'idle', () => {
        this.renderer.addClass(mapEl, 'visible');
      });

      // add click listener to get location clicked
      map.addListener('click', event => {
        const selectedCoords = {
          lat: event.latLng.lat(),
          lng: event.latLng.lng()
        };

        // dismiss the map modal with selected coordinates
        this.modalCtrl.dismiss(selectedCoords);
      });
    }).catch(err => {
      const presentToast = async () => {
        const toast = await this.toastCtrl.create({
          message: err,
          duration: 3000
        });
        toast.present();
      };
      presentToast();
    });
  }

  cancel() {
    this.modalCtrl.dismiss();
  }

  private getMaps(): Promise<any> {
    // load js sdk
    const win = window as any;

    // win.google by default isnt set but will be set immediately after we import js sdk
    const googleModule = win.google;
    if (googleModule && googleModule.maps) {
      // js sdk has been already loaded
      return Promise.resolve(googleModule.maps);
    } return new Promise((resolve, reject) => {
       const script = document.createElement('script');
       script.src = 'https://maps.googleapis.com/maps/api/js?key=' + keys.maps;
       script.async = true;
       script.defer = true;
       document.body.appendChild(script);
       script.onload = () => {
         const loadedGoogleModule = win.google;
         if (loadedGoogleModule && loadedGoogleModule.maps) {
           resolve (loadedGoogleModule.maps);
         } else {
           reject('Google maps SDK not available');
         }
       };
    });
  }

}
