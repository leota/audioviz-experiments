import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSketchComponent } from './basic-sketch.component';

describe('BasicSketchComponent', () => {
  let component: BasicSketchComponent;
  let fixture: ComponentFixture<BasicSketchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicSketchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicSketchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
