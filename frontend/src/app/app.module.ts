import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './Components/empleados/empleados.component';
import { BarraComponent } from './Components/barra/barra.component';
import { from } from 'rxjs';
import { ToastComponent } from './Components/toast/toast.component';
import { Alert } from 'selenium-webdriver';
import { PruebaComponent } from './Components/prueba/prueba.component';



@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    BarraComponent,
    ToastComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
