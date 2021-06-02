import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';



@Injectable({
  providedIn: 'root'
})
export class MapCustomService {
  mapbox = (mapboxgl as typeof mapboxgl);
  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = -19.5816015;
  lng = -65.7564143;
  zoom = 15;

  constructor() {
    this.mapbox.accessToken = environment.mapPK;
  }

  buildMap(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        //CONSTRUCCIÓN DEL MAPA

        
        this.map = new mapboxgl.Map({
          //le indicamos que se dibuje en el div del html del AppComponent.ts
          container: 'map',
          style: this.style,
          zoom: this.zoom,
          center: [this.lng, this.lat]
        });
        resolve({
          map: this.map
        });
      } catch (e) {
        reject(e);
      }
    });
  }

}
