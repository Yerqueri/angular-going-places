import { SavedPlaces } from './saved-places.component';
import { MarkerService } from './marker.service';
import { ApiSearchService } from './search.service';
import { NavBarComponent } from './navbar.component';
import { GoogleMapComponent } from './googlemap.component';
import { AppComponent } from './app.component';
import { PlacesSearch } from './places-searchbar.component';
import {SavedMarkerService} from './saved-markerservice.service'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,FormControl,ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AgmCoreModule } from '@agm/core';



@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC5Cmif70Bc0vulUq4HrCEDe_s4Ur6bhJ4',
      libraries: ["places"]
    })
  ],
  providers: [ApiSearchService,MarkerService,SavedMarkerService],
  declarations: [ AppComponent,GoogleMapComponent,PlacesSearch,NavBarComponent,SavedPlaces],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
