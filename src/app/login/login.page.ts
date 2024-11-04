// src/app/login/login.page.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private navCtrl: NavController
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  async submitLogin() {
    if (this.loginForm.valid) {
      const loading = await this.loadingController.create({
        message: 'Iniciando sesión...',
        spinner: 'crescent', // Cambia el tipo de spinner si es necesario
        cssClass: 'custom-loading', // Clase CSS personalizada para el estilo
      });
      await loading.present();

      // Simula un proceso de inicio de sesión (aquí se podría hacer una llamada API)
      setTimeout(async () => {
        await loading.dismiss();

        // Aquí podrías manejar la lógica de autenticación real
        // Si el inicio de sesión es exitoso
        this.navCtrl.navigateRoot('/home'); // Redirige a la página de inicio
      }, 3000); // Simula un retraso de 3 segundos
    } else {
      console.error('Formulario de inicio de sesión no válido');
    }
  }
}
