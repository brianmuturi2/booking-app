import { Component, OnInit } from '@angular/core';
import {Offer} from '../models/offers.model';
import {OffersService} from '../services/offers.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  offers: Offer[] = [];

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.offers = this.offersService.offers;
  }

}
