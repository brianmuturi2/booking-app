import { Component, OnDestroy, OnInit } from '@angular/core';
import {Offer} from '../models/offers.model';
import {OffersService} from '../services/offers.service';
import {Router} from '@angular/router';
import {IonItemSliding} from '@ionic/angular';
import {PlacesService} from "../../places/services/places.service";
import {Place} from "../../places/models/place.model";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit, OnDestroy {

  offers: Place[] = [];
  offersSub: Subscription;

  constructor(private offersService: OffersService,
              private placesService: PlacesService,
              private router: Router) { }

  ngOnInit() {
    this.offersSub = this.placesService.places.subscribe(res => this.offers = res);
  }

  onEdit(id, slideItem: IonItemSliding ) {
    console.log(id);
    this.router.navigate(['/places/offers/edit', id]);
    slideItem.close();
  }

  ngOnDestroy() {
    this.offersSub.unsubscribe();
  }

}
