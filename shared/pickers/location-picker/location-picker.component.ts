import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {MapModalComponent} from "../../map-modal/map-modal.component";

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss'],
})
export class LocationPickerComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  async pickLocation() {
    const modal = await this.modalCtrl.create({
      component: MapModalComponent
    });
    await modal.present();
    const dismiss = await modal.onDidDismiss();
    console.log('modal data is ', dismiss);
  }
}
