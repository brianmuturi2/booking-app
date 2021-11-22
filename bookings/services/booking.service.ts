import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import {Booking} from '../models/booking.model';
import {AuthService} from "../../auth/services/auth.service";
import {delay, map, switchMap, take, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { urls } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookings = new BehaviorSubject<Booking[]>([]);

  constructor(private authService: AuthService,
              private http: HttpClient) { }

  get bookings() {
    return this._bookings.asObservable();
  }

  addBooking(placeId: string, placeTitle: string, placeImage: string, firstName: string, lastName: string, guestNumber: number, dateFrom: Date, dateTo: Date) {
    let genId = '';
    let newBooking: Booking;
    return this.authService.userId.pipe(take(1), switchMap(userId => {
      if (!userId) {
        throw new Error('No user id found!');
      }
      newBooking = new Booking(Math.random().toString(), placeId, userId, placeTitle, placeImage, firstName, lastName, guestNumber, dateFrom, dateTo);
      return this.http.post<{name: string}>(`${urls.booking}`, {...newBooking, id: null});
    }), switchMap(resData => {
        genId = resData?.name;
        return this.bookings;
      }),
      take(1),
      tap(bookings => {
        newBooking.id = genId;
        this._bookings.next(bookings.concat(newBooking));
    }));
  }

  cancelBooking(bookingId: string) {
    return this.http.delete(`${urls.deleteBooking}/${bookingId}.json`).pipe(
      switchMap(() => {
        return this.bookings;
      }),
      take(1),
      tap(res => {
        this._bookings.next(res.filter(cur => cur.id !== bookingId));
      })
    );
  }

  getBookings(id) {
    return this.http.get(`${urls.booking}?orderBy="userId"&equalTo="${id}"`).pipe(map(bookingData => {
      const bookings = [];
      for(const key in bookingData) {
        if (bookingData.hasOwnProperty) {
          bookings.push(new Booking(key, bookingData[key].placeId, bookingData[key].userId, bookingData[key].placeTitle, bookingData[key].placeImage, bookingData[key].firstName, bookingData[key].lastName, bookingData[key].guestNumber, new Date(bookingData[key].bookedFrom), new Date(bookingData[key].bookedTo)));
        }
      }
      return bookings;
    }), tap(bookings => {
      this._bookings.next(bookings);
    }));
  }
}
