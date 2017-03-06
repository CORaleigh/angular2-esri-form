import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsriFormComponent } from './esri-form.component';

describe('EsriFormComponent', () => {
  let component: EsriFormComponent;
  let fixture: ComponentFixture<EsriFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsriFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsriFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
