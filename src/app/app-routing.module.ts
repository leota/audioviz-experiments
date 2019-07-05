import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BasicSketchComponent } from './sketches/basic-sketch/basic-sketch.component';
import { TestSketchComponent } from './sketches/test-sketch/test-sketch.component';


const routes: Routes = [
  { path: '', redirectTo: '/sketches', pathMatch: 'full' },
  { path: 'sketches', component: AppComponent, pathMatch: 'full' },
  { path: 'sketches/basic', component: BasicSketchComponent, pathMatch: 'full' },
  { path: 'sketches/test', component: TestSketchComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/sketches' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
