// src/app/form/form.page.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage {
  myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private navCtrl: NavController
  ) {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // Otros campos del formulario...
    });
  }

  async submitForm() {
    if (this.myForm.valid) {
      // Muestra el loader
      const loading = await this.loadingController.create({
        message: 'Enviando...',
        spinner: 'crescent', // Puede ser 'bubbles', 'circles', 'crescent', etc.
        duration: 2000 // Duración de la animación (2 segundos)
      });
      await loading.present();

      // Simula un proceso de envío (puedes hacer tu llamada API aquí)
      setTimeout(async () => {
        // Aquí puedes manejar la respuesta después de enviar el formulario
        await loading.dismiss();
        // Redirigir o mostrar un mensaje de éxito
        this.navCtrl.navigateBack('/home');
      }, 2000); // Simula un retraso de 2 segundos
    } else {
      // Manejo de errores si el formulario no es válido
      console.error('Formulario no válido');
    }
  }
}
