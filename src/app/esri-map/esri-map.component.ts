import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { EsriLoaderService } from 'angular2-esri-loader';
@Component({
  selector: 'esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css'],
  providers: [EsriLoaderService]
})
export class EsriMapComponent implements OnInit {
  map: any;
  view: any;
    @ViewChild('map') mapEl: ElementRef;

  constructor(private esriLoader: EsriLoaderService) { }

  ngOnInit() {
    // only load the ArcGIS API for JavaScript when this component is loaded
    return this.esriLoader.load({
      // use a specific version of the API instead of the latest
      url: '//js.arcgis.com/4.3/'
    }).then(() => {
      // load the map class needed to create a new map
      this.esriLoader.loadModules(['esri/Map', "esri/views/MapView"]).then(([Map, MapView]) => {
        this.map = new Map({basemap:'dark-gray-vector'});
        this.view = new MapView({
          container: "viewDiv",  // Reference to the scene div created in step 5
          map: this.map,  // Reference to the map object created before the scene
          zoom: 4,  // Sets the zoom level based on level of detail (LOD)
          center: [-78.5, 35.5]  // Sets the center point of view in lon/lat
        });
      });
    });
  }
}
