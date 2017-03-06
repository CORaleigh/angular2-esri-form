import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FeatureLayer } from './feature-layer';
import { EsriFields } from './esri-fields'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FeatureLayerService {

  private featureLayerUrl = 'http://services.arcgis.com/v400IkDOw1ad7Yad/ArcGIS/rest/services/Emergency_Road_Closures/FeatureServer/0';  // URL to web api

  constructor(private http: Http) { }

  getFields(): Promise<EsriFields[]> {
    return this.http.get(this.featureLayerUrl + '?f=json')
               .toPromise()
               .then(response => response.json().fields as EsriFields[])
               .catch(this.handleError);
  }
  addFeature(body: Object): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.featureLayerUrl + '/addFeature', body, options)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
