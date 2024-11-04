// src/app/login/login.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Asegúrate de que este módulo esté importado
    IonicModule
  ],
  declarations: [LoginPage] // Asegúrate de que LoginPage esté declarado
})
export class LoginPageModule {}
