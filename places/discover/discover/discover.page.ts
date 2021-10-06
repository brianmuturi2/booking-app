import { Component, OnInit } from '@angular/core';
import {PlacesService} from '../../places/services/places.service';
import {Place} from '../../places/models/place.model';
import { Pipe } from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadedPlaces: Place[];

  constructor(private placesService: PlacesService,
              private menuController: MenuController) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

  openMenu() {
    this.menuController.toggle();
  }

}
