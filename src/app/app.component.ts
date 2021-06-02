import { Component, OnInit } from '@angular/core';
import { MapCustomService } from './map-custom.service';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private mapCustomService: MapCustomService
  ) { }

  ngOnInit(): void {
    this.mapCustomService.buildMap()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
