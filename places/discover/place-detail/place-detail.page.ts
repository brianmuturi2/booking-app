import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ActionSheetController, ModalController, NavController} from '@ionic/angular';
import {PlacesService} from '../../places/services/places.service';
import {Place} from '../../places/models/place.model';
import {CreateBookingComponent} from '../../../bookings/modals/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(  private router: Router,
                private navController: NavController,
                private route: ActivatedRoute,
                private placesService: PlacesService,
                private modalController: ModalController,
                private actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(res => {
      this.place = this.placesService.getPlace(res.get('placeId'));
    });
  }

  onBookPlace() {
    //this.router.navigate(['/places/discover']);
    //this.navController.navigateBack('/places/discover');

    this.actionSheetController.create({
      buttons: [
        {
          text: 'Select Date',
          handler: () => {
            this.openBookingModal('select');
          }
        },
        {
          text: 'Random Date',
          handler: () => {
            this.openBookingModal('random');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled');
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

  openBookingModal(mode: 'select' | 'random') {
    console.log(mode);

    this.modalController.create({
      component: CreateBookingComponent,
      componentProps: {
        selectedPlace: this.place
      },
      id: 'book-place'
    }).then(res => {
      res.present();
      return res.onDidDismiss();
    }).then(res => {
      console.log(res);
    });
  }

}
