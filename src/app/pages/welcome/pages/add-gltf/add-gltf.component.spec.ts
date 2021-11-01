import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGltfComponent } from './add-gltf.component';

describe('AddGltfComponent', () => {
  let component: AddGltfComponent;
  let fixture: ComponentFixture<AddGltfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGltfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGltfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
