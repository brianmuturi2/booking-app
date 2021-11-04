import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import {Booking} from '../models/booking.model';
import {AuthService} from "../../auth/services/auth.service";
import {delay, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookings = new BehaviorSubject<Booking[]>([
    new Booking(
        'xyz',
        'p1',
        'abc',
        'Manhattan Mansion',
        'http://www.themostexpensivehomes.com/wp-content/uploads/2013/11/The-most-expensive-homes-Woolworth-Mansion-in-New-York-City.jpg',
        'Woolworth',
        'mansion',
        15,
        new Date(),
        new Date()
    )
  ]);

  constructor(private authService: AuthService) { }

  get bookings() {
    return this._bookings.asObservable();
  }

  addBooking(placeId: string, placeTitle: string, placeImage: string, firstName: string, lastName: string, guestNumber: number, dateFrom: Date, dateTo: Date) {
    const newBooking = new Booking(Math.random().toString(), placeId, this.authService.userId, placeTitle, placeImage, firstName, lastName, guestNumber, dateFrom, dateTo);
    return this._bookings.pipe(take(1), delay(1000), tap(res => {
      this._bookings.next(res.concat(newBooking));
    }));
  }

  cancelBooking(bookingId: string) {
    return this._bookings.pipe(take(1), delay(1000), tap(res => {
      this._bookings.next(res.filter(cur => cur.id !== bookingId));
    }));
  }
}
