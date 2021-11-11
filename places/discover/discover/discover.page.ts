import { Component, OnDestroy, OnInit } from '@angular/core';
import {PlacesService} from '../../places/services/places.service';
import {Place} from '../../places/models/place.model';
import {MenuController} from '@ionic/angular';
import { Subscription } from 'rxjs';
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit, OnDestroy {

  loadedPlaces: Place[];
  relevantPlaces: Place[];
  private placesSub: Subscription;

  isLoading = false;

  constructor(private placesService: PlacesService,
              private authService: AuthService,
              private menuController: MenuController) { }

  ngOnInit() {
    this.placesSub = this.placesService.places.subscribe(res => {
      this.loadedPlaces = res;
      this.relevantPlaces = this.loadedPlaces;
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.placesSub = this.placesService.fetchPlaces().subscribe(res => {
      this.isLoading = false;
      this.loadedPlaces = res;
      this.relevantPlaces = this.loadedPlaces;
    });
  }

  openMenu() {
    this.menuController.toggle();
  }

  segmentChanged(event: CustomEvent) {
    console.log(event);
    if (event.detail.value === 'allPlaces') {
      this.relevantPlaces = this.loadedPlaces;
    } else {
      this.relevantPlaces = this.loadedPlaces.filter(cur => cur.userId !== this.authService.userId);
    }
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
