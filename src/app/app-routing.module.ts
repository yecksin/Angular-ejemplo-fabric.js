import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EjemploBaseComponent } from './ejemplo-base/ejemplo-base.component';
import { EditFabricComponent } from './edit-fabric/edit-fabric.component';


const routes: Routes = [
  { path: '', component: EjemploBaseComponent },
  { path: 'basico', component: EjemploBaseComponent },
  { path: 'avanzado', component: EditFabricComponent },
  { path: 'path4', component: EjemploBaseComponent },
  { path: '**', component: EjemploBaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
