import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, AlertController } from '@ionic/angular';
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

  async login() {
    if (this.loginForm.valid) {
      const loading = await this.loadingController.create({
        message: 'Iniciando sesión...',
        spinner: 'crescent',
        cssClass: 'custom-loading',
      });
      await loading.present();

      const isAuthenticated = await this.dataService.loginUser(this.email, this.password);

      await loading.dismiss();

      if (isAuthenticated) {
        this.navCtrl.navigateRoot('/home');
      } else {
        this.presentAlert('Correo o contraseña incorrectos.');
      }
    } else {
      this.presentAlert('Por favor, complete todos los campos.');
    }
  }
}