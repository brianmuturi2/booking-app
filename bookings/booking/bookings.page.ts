import { Component, OnDestroy, OnInit } from '@angular/core';
import {BookingService} from '../services/booking.service';
import {Booking} from '../models/booking.model';
import {IonItemSliding} from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit, OnDestroy {

  bookingsSub: Subscription;
  loadedBookings: Booking[];
  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.bookingsSub = this.bookingService.bookings.subscribe(res => this.loadedBookings = res);
  }

  cancelBooking(id, slide: IonItemSliding) {
    slide.close();

    // cancel booking with id
  }

  ngOnDestroy() {
    if (this.bookingsSub) {
      this.bookingsSub.unsubscribe();
    }
  }

}
