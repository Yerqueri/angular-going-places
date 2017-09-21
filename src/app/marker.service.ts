import { Init } from './init-markers';
import { Injectable } from '@angular/core';

@Injectable()
export class MarkerService extends Init{
    constructor(){
        super();
        console.log('MarkerService Initialized')
        this.load();
    }

    getMarkers(){
        var markers= JSON.parse(localStorage.getItem('markers'));
        return markers;
    }
    
    loadNewMarkers(results){
        var markers= JSON.parse(localStorage.getItem('markers'));
        markers=[];
        markers.push(results);
        localStorage.setItem('markers',JSON.stringify(results));
    }
}