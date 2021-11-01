import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tiles3dComponent } from './tiles3d.component';

describe('Tiles3dComponent', () => {
  let component: Tiles3dComponent;
  let fixture: ComponentFixture<Tiles3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tiles3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tiles3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
