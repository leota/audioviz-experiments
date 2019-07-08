import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicSketchComponent } from './sketches/basic-sketch/basic-sketch.component';
import { TestSketchComponent } from './sketches/test-sketch/test-sketch.component';
import { SketchListComponent } from './components/sketch-list/sketch-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/sketches', pathMatch: 'full' },
  { path: 'sketches', component: SketchListComponent, pathMatch: 'full' },
  { path: 'sketches/basic', component: BasicSketchComponent, pathMatch: 'full' },
  { path: 'sketches/test', component: TestSketchComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/sketches' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
