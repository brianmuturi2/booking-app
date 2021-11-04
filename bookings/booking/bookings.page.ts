import { Component, OnDestroy, OnInit } from '@angular/core';
import {BookingService} from '../services/booking.service';
import {Booking} from '../models/booking.model';
import {IonItemSliding, LoadingController, ToastController} from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit, OnDestroy {

  bookingsSub: Subscription;
  loadedBookings: Booking[];
  constructor(private bookingService: BookingService,
              private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.bookingsSub = this.bookingService.bookings.subscribe(res => this.loadedBookings = res);
  }

  async cancelBooking(bookingId, slide: IonItemSliding) {
    slide.close();
    // cancel booking with id
    const loading = await this.loadingCtrl.create({
      message: 'Deleting booking ...',
    });
    await loading.present();
    this.bookingService.cancelBooking(bookingId).subscribe( res => {
      loading.dismiss();
    });
  }

  ngOnDestroy() {
    if (this.bookingsSub) {
      this.bookingsSub.unsubscribe();
    }
  }

}
