import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; 
import { AlertController } from '@ionic/angular'; 
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  rut: string = '';
  nombre: string = '';
  apellidop: string = '';
  apellidom: string = '';
  profesion: string = '';
  horas_disponibles: number = 0;
  registroStatus: string = '';

  constructor(private alertController: AlertController, private menu: MenuController, private dataService: DataService) { }

  ngOnInit() {
    this.menu.close("mainMenu");
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  guardar() {
    if (this.nombre.trim() === '' || this.apellidop.trim() === '' || this.apellidom.trim() === '' || this.profesion.trim() === '' || this.horas_disponibles <= 0) {
      this.presentAlert('Error: Todos los campos son obligatorios y las horas disponibles deben ser mayores a 0');
    } else {
      this.register();
    }
  }

  async register() {
    const success: boolean = await this.dataService.registerUser(
      this.rut,
      this.nombre,
      this.apellidop,
      this.apellidom,
      this.profesion,
      this.horas_disponibles
    );
    this.registroStatus = success ? 'Registro exitoso' : 'Error al registrar';
    this.presentAlert(this.registroStatus);
  }
}