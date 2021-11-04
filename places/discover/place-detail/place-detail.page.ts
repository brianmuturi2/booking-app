import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ActionSheetController, LoadingController, ModalController, NavController} from '@ionic/angular';
import {PlacesService} from '../../places/services/places.service';
import {Place} from '../../places/models/place.model';
import {CreateBookingComponent} from '../../../bookings/modals/create-booking/create-booking.component';
import { Subscription } from 'rxjs';
import {BookingService} from "../../../bookings/services/booking.service";

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit, OnDestroy {

  place: Place;
  placeSub: Subscription;

  constructor(  private router: Router,
                private navController: NavController,
                private route: ActivatedRoute,
                private placesService: PlacesService,
                private modalController: ModalController,
                private actionSheetController: ActionSheetController,
                private loadingController: LoadingController,
                private bookingService: BookingService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(res => {
      this.placeSub = this.placesService.getPlace(res.get('placeId')).subscribe(placeRes => this.place = placeRes );
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

  async openBookingModal(mode: 'select' | 'random') {
    console.log(mode);

    const modal = await this.modalController.create({
      component: CreateBookingComponent,
      componentProps: {
        selectedPlace: this.place,
        selectedMode: mode
      },
      id: 'book-place'
    });
    await modal.present();
    const dismiss = await modal.onDidDismiss();
    console.log('dismiss value is ', dismiss);
    if (dismiss.role === 'confirm') {
      const loadCtrl = await this.loadingController.create({
        message: 'Booking place...'
      });
      await loadCtrl.present();
      const data = this.bookingService.addBooking(this.place.id, this.place.title, this.place.imageUrl, dismiss.data.bookingData.firstName, dismiss.data.bookingData.lastName, dismiss.data.bookingData.guestNumber, dismiss.data.bookingData.startDate, dismiss.data.bookingData.endDate).subscribe(response => {
        this.loadingController.dismiss();
      });
      this.router.navigate(['/bookings']);
    }
  }

  ngOnDestroy() {
    this.placeSub.unsubscribe();
  }

}
