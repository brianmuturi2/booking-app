import { Component, OnInit } from '@angular/core';
import {Offer} from '../models/offers.model';
import {OffersService} from '../services/offers.service';
import {Router} from '@angular/router';
import {IonItemSliding} from '@ionic/angular';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  offers: Offer[] = [];

  constructor(private offersService: OffersService,
              private router: Router) { }

  ngOnInit() {
    this.offers = this.offersService.offers;
  }

  onEdit(id, slideItem: IonItemSliding ) {
    console.log(id);
    this.router.navigate(['/places/offers/edit', id]);
    slideItem.close();
  }

}
