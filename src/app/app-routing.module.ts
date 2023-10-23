import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { EliminarComponent } from './eliminar/eliminar.component';

const routes: Routes = [
  {path:'agregar',component:AgregarComponent},
  {path:'actualizar',component:ActualizarComponent},
  {path:'eliminar',component:EliminarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
