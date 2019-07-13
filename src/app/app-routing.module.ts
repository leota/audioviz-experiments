import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicSketchComponent } from './sketches/basic-sketch/basic-sketch.component';
import { SketchListComponent } from './components/sketch-list/sketch-list.component';
import { PrimitivesComponent } from './sketches/01-primitives/primitives.component';


const routes: Routes = [
  { path: '', redirectTo: '/sketches', pathMatch: 'full' },
  { path: 'sketches', component: SketchListComponent, pathMatch: 'full' },
  { path: 'sketches/basic', component: BasicSketchComponent, pathMatch: 'full' },
  { path: 'sketches/primitives', component: PrimitivesComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/sketches' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
