// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],  // Declara el componente principal aquí
  imports: [
    BrowserModule,             // Módulo necesario para aplicaciones en navegadores
    IonicModule.forRoot(),      // Inicializa Ionic
    AppRoutingModule            // Importa el módulo de rutas
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy } // Estrategia de reutilización de rutas para Ionic
  ],
  bootstrap: [AppComponent] // Componente que se arranca al inicio
})
export class AppModule {}
