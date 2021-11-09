import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {MapModalComponent} from "../../map-modal/map-modal.component";
import {LocationPickerService} from './services/location-picker.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss'],
})
export class LocationPickerComponent implements OnInit {

  latLng = {
    lat: '',
    lng: ''
  };
  constructor(public modalCtrl: ModalController,
              private locationService: LocationPickerService) { }

  ngOnInit() {}

  async pickLocation() {
    const modal = await this.modalCtrl.create({
      component: MapModalComponent
    });
    await modal.present();
    const dismiss = await modal.onDidDismiss();
    this.latLng.lat = dismiss.data.lat;
    this.latLng.lng = dismiss.data.lng;
    console.log('modal data is ', dismiss);
    this.getLocation();
  }

  private getLocation() {
    this.locationService.getAddress(this.latLng.lat, this.latLng.lng).subscribe(res => {
      console.log('Address is ', res);
    });
  };
}
