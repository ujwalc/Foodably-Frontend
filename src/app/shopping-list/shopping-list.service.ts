import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {plainToClass} from 'class-transformer';
import {Recipe} from '../shared/models/recipe/recipe.model';
import {Ingredient} from '../shared/models/recipe/ingredient.model';


interface Location{
  latitude:string;
  longitude:string;
}
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  baseURL = 'http://localhost:4000/';

  private google = (<any>window).google;
  private googleMap;
  private googlePlacesService;
  private apiUrl = 'https://ipapi.co/json/';
  constructor(private http: HttpClient){}
  
//fetchUserCookingList makes a get request
    fetchUserCookingList() {
      return this.http
        .get(this.baseURL + '\cookinglist')
        .pipe(
          map(responseData => {
            const key = 'data';
            const shoppingListKey = 'shoppingList';
            if (responseData.hasOwnProperty(key)) {
              return plainToClass(Ingredient, responseData[key][shoppingListKey]) as unknown as Array<Ingredient>;
            }
          }),
          catchError(errorRes => {
            return throwError(errorRes);
          })
        );
    }
//NewtonJoshua, “NewtonJoshua/RestaurantFinder,” GitHub. [Online]. Available: https://github.com/NewtonJoshua/RestaurantFinder. [Accessed: 04-Apr-2020].
//Maps to get current location coordinates, create map and add listeners.
    getLocation():Observable<any>{
      return Observable.create(observer => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            observer.next(pos);
            observer.complete();
          }, (error) => {
            observer.error(error);
          });
        } else {
          observer.error('Browser doesnt support Geolocation');
        }
      });

    }


    createMap(mapElement, position) {
      this.googleMap = new this.google.maps.Map(mapElement, {
        center: position,
        zoom: 14,
        mapTypeId: this.google.maps.MapTypeId.HYBRID,
        disableDefaultUI: true
      });

      const trafficLayer = new this.google.maps.TrafficLayer();
      trafficLayer.setMap(this.googleMap);
      const transitLayer = new this.google.maps.TransitLayer();
      transitLayer.setMap(this.googleMap);
      this.googlePlacesService = new this.google.maps.places.PlacesService(this.googleMap);

      const marker = new this.google.maps.Marker({
        map: this.googleMap,
        animation: this.google.maps.Animation.DROP,
        position: position,
        icon: {
          path: this.google.maps.SymbolPath.CIRCLE,
          scale: 8
        }
      });
      
    }



}
