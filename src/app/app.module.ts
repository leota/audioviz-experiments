import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SketchListComponent } from './components/sketch-list/sketch-list.component';
import { BasicSketchComponent } from './sketches/basic-sketch/basic-sketch.component';
import { TestSketchComponent } from './sketches/test-sketch/test-sketch.component';

@NgModule({
  declarations: [
    AppComponent,
    SketchListComponent,
    BasicSketchComponent,
    TestSketchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
