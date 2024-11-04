import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  constructor(private navCtrl: NavController) {}

  login() {
    // Aquí se pueden agregar la lógica de autenticación
    this.navCtrl.navigateForward('/home');
  }
}
