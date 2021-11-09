import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {LoadingController, ModalController } from '@ionic/angular';
import {MapModalComponent} from "../../map-modal/map-modal.component";
import {LocationPickerService} from './services/location-picker.service';
import {map, switchMap} from 'rxjs/operators';
import {Coordinates, PlaceLocation} from './models/location.model';

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss'],
})
export class LocationPickerComponent implements OnInit {

  latLng: PlaceLocation = {
    lat: null,
    lng: null,
    address: null,
    staticMapImageUrl: null
  };

  isLoading = false;

  constructor(public modalCtrl: ModalController,
              private locationService: LocationPickerService,
              private loadingCtrl: LoadingController) { }

  ngOnInit() {}

  async pickLocation() {
    const modal = await this.modalCtrl.create({
      component: MapModalComponent
    });
    await modal.present();
    const dismiss = await modal.onDidDismiss();

    if (dismiss.data) {
      this.isLoading = true;

      this.latLng.lat = dismiss.data.lat;
      this.latLng.lng = dismiss.data.lng;

      this.latLng.staticMapImageUrl = null;

      this.getLocation();
      this.getStaticMap();
    }
  }

  resetLocation() {
    this.latLng.staticMapImageUrl = null;
  }

  private getLocation() {
    this.locationService.getAddress(this.latLng.lat, this.latLng.lng).subscribe(res => {
      this.latLng.address = res;
      console.log('address is ', this.latLng.address);
    });
  };

  private getStaticMap() {
    this.locationService.getMapImage(+this.latLng.lat, +this.latLng.lng, 14).subscribe(res => {
      // not working
      console.log('response is ', res);
      this.latLng.staticMapImageUrl = res[0];
      this.isLoading = false;
    }, err => {
      console.log('error is ', err);
      if (err.status === 200) {
        this.latLng.staticMapImageUrl = err.url;
        console.log('image url is ', this.latLng.staticMapImageUrl);
      }
      this.isLoading = false;
    });
  }

}
