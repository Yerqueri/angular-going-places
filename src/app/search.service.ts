import { Injectable }    from '@angular/core';
import { Headers, Http,Response } from '@angular/http';
import { MainBody } from './interfaceReturnedJson';
import { Observable } from 'rxjs/Observable';
 
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
 
import { key } from './placeskey';
 
@Injectable()
export class ApiSearchService {
 
  constructor(private http: Http) {}

  private headers = new Headers({'Content-Type': 'application/json'});
  private nearbySearchUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json';
  places=[];
  
  getPlaceByQuery(query:String){
    console.log("service query"+query);
    const url = `${this.nearbySearchUrl}?${query}&key=${key}`;
    return this.http.get(url).map(response => response.json());
  } 

}




