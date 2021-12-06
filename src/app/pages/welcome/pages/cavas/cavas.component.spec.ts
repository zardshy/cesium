import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CavasComponent } from './cavas.component';

describe('CavasComponent', () => {
  let component: CavasComponent;
  let fixture: ComponentFixture<CavasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CavasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CavasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
