export interface ViewportBody {
    northeast: LocationBody;
    southwest: LocationBody;
  }
  export interface LocationBody {
    lat: number;
    lng: number;
  }
  export interface GeometryBody {
    location: LocationBody;
    viewport: ViewportBody;
  }
  export interface OpBody {
    open_now: boolean;
    weekday_text: string[];
  }
  export interface PhotosBody {
    height: number;
    html_attributions: string[];
    photo_reference: string;
    width: number;
  }
  export interface ResultBody {
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
  export interface MainBody {
    html_attributions: string;
    results: ResultBody[];
    status: string;
  }
  export interface MainBody2 {
    user_id: number;
    id?: number;
    title: string;
    body: string;
  }