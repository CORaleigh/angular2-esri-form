import { Component, OnInit, Attribute } from '@angular/core';
import { FeatureLayerService } from '../feature-layer.service';
import { EsriFields } from '../esri-fields';
import { FeatureLayer } from '../feature-layer';
@Component({
  selector: 'esri-form',
  templateUrl: './esri-form.component.html',
  styleUrls: ['./esri-form.component.css'],
  providers: [FeatureLayerService]
})
export class EsriFormComponent implements OnInit {
  fields: EsriFields[];
  data: any;
  ignoreFields: [string];
  result: any;
  constructor(private featureLayerService: FeatureLayerService, @Attribute("ignore-fields") ignoreFields) {
    this.ignoreFields = ignoreFields;
  }
  getFields(): void {
    this.featureLayerService.getFields().then(fields => this.fields = fields);
  }

  submitForm(): void {
    this.featureLayerService.addFeature(this.data).then(result => this.result = result);
    console.log(this.result);
  }

  ngOnInit() {
    this.getFields();
    this.data = {};
  }

}
