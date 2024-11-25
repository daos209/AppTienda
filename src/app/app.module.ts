// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

@NgModule({
  declarations: [AppComponent],  // Declara el componente principal aquí
  imports: [
    BrowserModule,             // Módulo necesario para aplicaciones en navegadores
    IonicModule.forRoot(),      // Inicializa Ionic
    AppRoutingModule            // Importa el módulo de rutas
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },SQLite], // Estrategia de reutilización de rutas para Ionic
  
  bootstrap: [AppComponent] // Componente que se arranca al inicio
})
export class AppModule {}
