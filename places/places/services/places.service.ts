import { Injectable } from '@angular/core';
import {Place} from '../models/place.model';
import {AuthService} from "../../../auth/services/auth.service";
import { BehaviorSubject } from 'rxjs';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { urls } from '../../../../environments/environment';

interface PlaceRes {
  availableFrom: string;
  availableTo: string;
  description: string;
  imageUrl: string;
  price: number;
  title: string;
  userId: string;
}

/*new Place(
  'p1',
  'Manhattan Mansion',
  'In the heart of Newyork city',
  'https://media.timeout.com/images/105150636/image.jpg',
  '149.99',
  new Date('2019-01-01'),
  new Date('2019-12-31'),
  'abc'
),
  new Place(
    'p2',
    'L\'Amour Toujours',
    'A romantic place in paris',
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2017%2F08%2Ffunky-loft-studio-airbnb-rental-paris-france-AIRBNBPARIS0817.jpg',
    '199.99',
    new Date('2019-01-01'),
    new Date('2019-12-31'),
    'arbc'
  ),
  new Place(
    'p3',
    'The foggy palace',
    'Not your average city trip!',
    'https://static.tripzilla.com/thumb/9/0/165008_800x.jpg',
    '399.99',
    new Date('2019-01-01'),
    new Date('2019-12-31'),
    'abdc'
  )*/

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>([]);

  constructor(private authService: AuthService,
              private http: HttpClient) { }

  get places() {
      return this._places.asObservable();
  }

  getPlace(id: string) {
    return this.places.pipe(
        take(1),
        map(res => {
            return { ...res.find(c => c.id === id)};
      })
    );
  }

  fetchPlace() {
    return this.http.get<{[key: string]: PlaceRes}>(urls.firebase).pipe(map(resData => {
      const places = [];
      for (const key in resData) {
        if (resData.hasOwnProperty(key)) {
          places.push(new Place(key, resData[key].title, resData[key].description, resData[key].imageUrl, resData[key].price+'', new Date(resData[key].availableFrom), new Date(resData[key].availableTo), resData[key].userId));
        }
      }
      return places;
    }), tap(places => {
      this._places.next(places);
    }));
  }

  addPlace(title: string, description: string, price: string, availableFrom: Date, availableTo: Date) {
    let genId = '';
    const newPlace = new Place(Math.random().toString(), title, description, 'https://static.tripzilla.com/thumb/9/0/165008_800x.jpg', price, availableFrom, availableTo, this.authService.userId);
    let response_id = '';
    return this.http.post<{name: string}>(urls.firebase, {...newPlace, id: null}).pipe(
         switchMap(resData => {
           genId = resData.name;
           return this.places;
         }), take(1), tap(places => {
            newPlace.id = genId;
            this._places.next(places.concat(newPlace));
      })
    );
/*      return this.places.pipe(take(1)).subscribe(res => {
          this._places.next(res.concat(newPlace));
      });*/
  }


  updatePlace(placeId: string, title: string, description: string) {
    let updatedPlaces: Place[];
    return this.places.pipe(
      take(1), switchMap(places => {
        const updatedPlaceIndex = places.findIndex(pl => pl.id === placeId);
        updatedPlaces = [...places];
        const old = updatedPlaces[updatedPlaceIndex];
        updatedPlaces[updatedPlaceIndex] = new Place(old.id, title, description, old.imageUrl, old.price, old.availableFrom, old.availableTo, old.userId);
        return this.http.put(`${urls.firebaseUpdate}/${placeId}.json`, {...updatedPlaces[updatedPlaceIndex], id: null});
      }), tap(()=> {
        this._places.next(updatedPlaces);
      }));
  }
}
