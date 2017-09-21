import { MarkerService } from './marker.service';
import { ApiSearchService } from './search.service';
import { Component , ElementRef,NgZone,ViewChild,OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';


@Component({
  selector: 'places-searchbar',
  templateUrl: 'places-searchbar.component.html',
  styleUrls: ['places-searchbar.component.css'],
})
export class PlacesSearch  implements OnInit {

  @ViewChild("search")
  public searchElementRef: ElementRef;
  
  public searchControl: FormControl;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private apisearchService: ApiSearchService,
    private markerService: MarkerService,
  ) {}
  
  query:string;
  place: google.maps.places.PlaceResult;

  ngOnInit() {

    //create search FormControl
    this.searchControl = new FormControl();
    
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
           this.place = autocomplete.getPlace();

          if (this.place.geometry === undefined || this.place.geometry === null) {
            this.query=this.place.name.replace(/ /gi,"+");
            this.query="query="+this.query;
            console.log(this.query)
          }
          else{
            this.query=this.place.place_id;
            this.query="placeid="+this.query;
            console.log(this.query)
          }

          this.getResults(this.query);

        });
      });
    });
  }
  
  result:any[];
  places:ResultBody[];

  handleResponse(response){
    this.places=response.results;
    console.log(this.places);
    return this.markerService
    .loadNewMarkers(this.places);
  }
  
  private getResults(query:string){
    console.log(query);

    this.apisearchService
        .getPlaceByQuery(query)
        .subscribe(
          response =>this.handleResponse(response)
        );
        
    console.log(this.places); 
    // if(this.places== undefined ||this.places[0] == null){
    //   return;
    // }
    // else{
    // return this.markerService
    //     .loadNewMarkers(this.places)
    // }
  };
  
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

