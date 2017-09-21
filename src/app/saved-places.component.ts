import { SavedMarkerService } from './saved-markerservice.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'savedplaces',
  templateUrl: 'savedplaces.component.html',
})
export class SavedPlaces implements OnInit{
  title: string = 'My first AGM project';
  places:marker[]=[];
  constructor(private savedMarkerService:SavedMarkerService){
  }
  
  ngOnInit(){
    this.places=this.savedMarkerService.getSavedMarkers();
  }

  deleteSaved(place:marker){
    for(var i=0;i<this.places.length;i++){
      if(this.places[i]===place){
          this.places.splice(i,1);
      }
    }
    this.savedMarkerService.deleteSavedMarker(this.places);
  }
}
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable?: boolean;
  name?:string;
}