import { key } from './placeskey';

import { SavedMarkerService } from './saved-markerservice.service';
import { MarkerService } from './marker.service';
// import { markers } from './markerdata';
// import { marker } from './markers';
import { Component } from '@angular/core';

@Component({
    selector: 'googlemap',
    templateUrl: 'googlemap.component.html',
    styleUrls: ['googlemap.component.css'],
  })

  export class GoogleMapComponent {
    zoom: number = 14;

    markers:ResultBody[]=[];
    savedmarkers:marker[]=[]
    
    // initial center position for the map
    lat: number;
    lng: number;
    
    url:string ='https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photoreference=';
    key="&key="+key;
    
    constructor(private markerService:MarkerService,private savedMarkerService:SavedMarkerService){
        this.markers=this.markerService.getMarkers();
        this.savedmarkers=this.savedMarkerService.getSavedMarkers();
        this.lat  = this.markers[1].geometry.location.lat;
        this.lng = this.markers[1].geometry.location.lng;
    }



    clickedMarker(lat,lng) {
      console.log(lat)
      console.log(lng)
    }
    
    placeMarker($event){
        console.log($event.coords.lat);
        console.log($event.coords.lng);
      }
    
    markerDragEnd(m: marker, $event: MouseEvent) {
      console.log('dragEnd', m, $event);
    }

    saveMarker(name:string,lat:number,lng:number){
      let newMarker:marker={
        lat:lat,
        lng:lng,
        name:name
      }
      console.log(newMarker.lat),
      this.savedmarkers.push(newMarker);
      this.savedMarkerService.addSavedMarker(newMarker);
    }
    
    // markers: marker[] = [];
    
  }
 
  interface marker {
      lat: number;
      lng: number;
      label?: string;
      draggable?: boolean;
      name?:string;
  }

  interface ViewportBody {
    northeast: LocationBody;
    southwest: LocationBody;
  }
  interface LocationBody {
    lat: number;
    lng: number;
  }
  interface GeometryBody {
    location: LocationBody;
    viewport: ViewportBody;
  }
  interface OpBody {
    open_now: boolean;
    weekday_text: string[];
  }
  interface PhotosBody {
    height: number;
    html_attributions: string[];
    photo_reference: string;
    width: number;
  }
  interface ResultBody {
    geometry: GeometryBody;
    icon: string;
    id: string;
    name: string;
    opening_hours: OpBody;
    photos: PhotosBody[];
    place_id: string;
    price_level: number;
    rating: number;
    reference: string;
    scope: string;
    types: string[];
    vicinity: string;
  }
  interface MainBody {
    html_attributions: string;
    results: ResultBody[];
    status: string;
  }
  interface MainBody2 {
    user_id: number;
    id?: number;
    title: string;
    body: string;
  }