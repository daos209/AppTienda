// src/app/home/home.page.ts

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(private navCtrl: NavController) {}

  goToLogin() {
    this.navCtrl.navigateForward('/login'); // Navega a la página de inicio de sesión
  }

  goToForm() {
    this.navCtrl.navigateForward('/form'); // Navega a la página del formulario
  }
}
