import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SketchListComponent } from './sketch-list.component';

describe('SketchListComponent', () => {
  let component: SketchListComponent;
  let fixture: ComponentFixture<SketchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SketchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SketchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
