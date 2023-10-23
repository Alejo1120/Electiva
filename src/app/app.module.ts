import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { EliminarComponent } from './eliminar/eliminar.component';



@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    ActualizarComponent,
    EliminarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
