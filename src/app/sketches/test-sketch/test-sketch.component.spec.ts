import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSketchComponent } from './test-sketch.component';

describe('TestSketchComponent', () => {
  let component: TestSketchComponent;
  let fixture: ComponentFixture<TestSketchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSketchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSketchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
