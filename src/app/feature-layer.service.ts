import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FeatureLayer } from './feature-layer';
import { EsriFields } from './esri-fields'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FeatureLayerService {

  private featureLayerUrl = 'http://services.arcgis.com/v400IkDOw1ad7Yad/ArcGIS/rest/services/Emergency_Road_Closures/FeatureServer/0?f=json';  // URL to web api

  constructor(private http: Http) { }

  getFields(): Promise<EsriFields[]> {
    return this.http.get(this.featureLayerUrl)
               .toPromise()
               .then(response => response.json().fields as EsriFields[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
