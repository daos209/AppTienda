// src/app/form/form.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de incluir ReactiveFormsModule
import { IonicModule } from '@ionic/angular';
import { FormPageRoutingModule } from './form-routing.module';
import { FormPage } from './form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Aquí importamos ReactiveFormsModule
    IonicModule,
    FormPageRoutingModule
  ],
  declarations: [FormPage]
})
export class FormPageModule {}
