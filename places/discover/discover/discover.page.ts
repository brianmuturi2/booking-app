import { Component, OnDestroy, OnInit } from '@angular/core';
import {PlacesService} from '../../places/services/places.service';
import {Place} from '../../places/models/place.model';
import {MenuController} from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit, OnDestroy {

  loadedPlaces: Place[];
  private placesSub: Subscription;

  constructor(private placesService: PlacesService,
              private menuController: MenuController) { }

  ngOnInit() {
    this.placesSub = this.placesService.places.subscribe(res => {this.loadedPlaces = res});
  }

  openMenu() {
    this.menuController.toggle();
  }

  segmentChanged(event: CustomEvent) {
    console.log(event);
  }

  ionViewDidEnter() {
    this.placesSub = this.placesService.places.subscribe(res => {this.loadedPlaces = res});
  }

  ngOnDestroy() {
    if (this.placesSub) {
      this.placesSub.unsubscribe();
    }
  }

}
