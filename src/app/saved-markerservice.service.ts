import { SavedMarkers } from './saved-markers';
import { Injectable } from '@angular/core';


@Injectable()
export class SavedMarkerService extends SavedMarkers{
    constructor(){
        super();
        console.log('SavedMarkerService Initialized')
        this.load();
    }

    getSavedMarkers(){
        var markers= JSON.parse(localStorage.getItem('savedmarkers'));
        return markers;
    }

    addSavedMarker(newMarker){
        var markers= JSON.parse(localStorage.getItem('savedmarkers'));
        if (markers.length>=10)
            markers.shift();

        for(var i=0;i<markers.length;i++){
            if(markers[i]===newMarker){
                return;
            }
        }
        
        markers.push(newMarker);
        localStorage.setItem('savedmarkers',JSON.stringify(markers));
        console.log('markerSaved');
        return;
    }
    
    deleteSavedMarker(places){
        var markers= JSON.parse(localStorage.getItem('savedmarkers'));
        console.log('function was here')
        markers=[];
        markers=places;
        localStorage.setItem('savedmarkers',JSON.stringify(markers));
        return;
    }

}