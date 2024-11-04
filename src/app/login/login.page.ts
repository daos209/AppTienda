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
  loginForm: FormGroup; // Define la propiedad loginForm como FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private navCtrl: NavController
  ) {
    // Inicializa el formulario en el constructor
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  async submitLogin() { // Asegúrate de que este método esté definido
    if (this.loginForm.valid) {
      const loading = await this.loadingController.create({
        message: 'Iniciando sesión...',
        spinner: 'crescent', // Tipo de spinner
        cssClass: 'custom-loading', // Clase CSS personalizada
      });
      await loading.present();

      // Simula el proceso de inicio de sesión (aquí podrías hacer la llamada API)
      setTimeout(async () => {
        await loading.dismiss();
        this.navCtrl.navigateRoot('/home'); // Redirige a la página de inicio
      }, 3000); // Simula un retraso de 3 segundos
    } else {
      console.error('Formulario de inicio de sesión no válido');
    }
  }
}
