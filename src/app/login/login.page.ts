import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';

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
    private navCtrl: NavController,
    private toastController: ToastController
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
        spinner: 'crescent',
        cssClass: 'custom-loading',
      });
      await loading.present();

      // Simula el proceso de inicio de sesión (aquí podrías hacer la llamada API)
      setTimeout(async () => {
        await loading.dismiss();
        // Aquí deberías verificar la autenticación real
        const loginSuccessful = true; // Simulación de resultado de inicio de sesión

        if (loginSuccessful) {
          this.navCtrl.navigateRoot('/dashboard');
        } else {
          this.presentToast('Credenciales inválidas. Intente nuevamente.');
        }
      }, 3000);
    } else {
      console.error('Formulario de inicio de sesión no válido');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'danger',
      position: 'bottom',
    });
    toast.present();
  }
}