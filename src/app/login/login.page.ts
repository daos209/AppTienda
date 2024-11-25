import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController, AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  email: string = '';
  password: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private navCtrl: NavController,
    private toastController: ToastController,
    private alertController: AlertController,
    private dataService: DataService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
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

  async login() {
    // Verificar que el campo de correo no esté vacío
    if (!this.email) {
      this.presentAlert('El campo de correo no puede estar vacío.');
      return;
    }

    // Validar el formato del correo
    if (!this.validarEmail(this.email)) {
      this.presentAlert('El formato del correo es inválido.');
      return;
    }

    // Verificar que la contraseña no esté vacía
    if (!this.password) {
      this.presentAlert('El campo de contraseña no puede estar vacío.');
      return;
    }

    // Verificar que la contraseña tenga máximo 4 caracteres
    if (this.password.length > 4) {
      this.presentAlert('La contraseña no puede tener más de 4 caracteres.');
      return;
    }

    // Validar credenciales con el servicio de autenticación
    const isAuthenticated = await this.dataService.loginUser(this.email, this.password);

    if (isAuthenticated) {
      // Si la autenticación es correcta, navega a la página "home"
      // Guardar el nombre del usuario en Local Storage
      localStorage.setItem('username', this.email);

      this.navCtrl.navigateForward(['/home'], {
        queryParams: {
          email: this.email
        }
      });
    } else {
      // Muestra alerta si las credenciales son incorrectas
      this.presentAlert('Correo o contraseña incorrectos.');
    }
  }

  validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular básica para validar email
    return emailRegex.test(email);
  }

  registro() {
    this.navCtrl.navigateForward(['/registro']);
  }
}