import { Injectable } from '@angular/core';
import {Booking} from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookings: Booking[] = [
    new Booking('xyz', 'p1', 'abc', 'Manhattan Mansion', 2)
  ];

  constructor() { }

  get bookings() {
    return [...this._bookings];
  }
}
