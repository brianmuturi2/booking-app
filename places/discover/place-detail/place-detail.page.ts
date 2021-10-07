import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {PlacesService} from '../../places/services/places.service';
import {Place} from '../../places/models/place.model';

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
                private placesService: PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(res => {
      this.place = this.placesService.getPlace(res.get('placeId'));
    });
  }

  onBookPlace() {
    //this.router.navigate(['/places/discover']);
    this.navController.navigateBack('/places/discover');
  }

}
