import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitCesiumComponent } from './init-cesium.component';

describe('InitCesiumComponent', () => {
  let component: InitCesiumComponent;
  let fixture: ComponentFixture<InitCesiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitCesiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitCesiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
