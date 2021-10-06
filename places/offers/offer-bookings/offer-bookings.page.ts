import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Place} from '../../places/models/place.model';
import {NavController} from '@ionic/angular';
import {PlacesService} from '../../places/services/places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {

  place: Place;

  constructor(private route: ActivatedRoute,
              private navController: NavController,
              private placesService: PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(res => {
      if (!res.has('placeId')) {
        this.navController.navigateBack('/places/offers');
        return;
      }
      this.place = this.placesService.getPlace(res.get('placeId'));
    });
  }

}
