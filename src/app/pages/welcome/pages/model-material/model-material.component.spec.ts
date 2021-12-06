import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelMaterialComponent } from './model-material.component';

describe('ModelMaterialComponent', () => {
  let component: ModelMaterialComponent;
  let fixture: ComponentFixture<ModelMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
