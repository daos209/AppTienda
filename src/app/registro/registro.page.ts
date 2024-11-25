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

  nombre: any='';
  apellido: any='';
  selectedOption: any=''; // nivel de estudios
  selectedDate: any='';
  usuario: any='';
  password: any='';
  registroStatus: string = '';

  constructor(private alertController: AlertController, private menu: MenuController,  private formatearFechaPipe: FormatearFechaPipe, private dataService: DataService) { }

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
    if (this.nombre.trim() === '' || this.apellido.trim() === '') {
      this.presentAlert('Error: nombre y apellido vacios');
    } else {
  
      //this.presentAlert('Datos Correctos  usuario:  '+this.nombre+' fecha nacimiento: '+this.selectedDate); 
      this.register() 
    }
  }

  async register() {
    const success = await this.dataService.registerUser(
      this.nombre,
      this.apellido,
      this.usuario,
      this.password,
      this.selectedOption,
      this.selectedDate
    );
    this.registroStatus = success ? 'Registro exitoso' : 'Error al registrar';
    this.presentAlert(this.registroStatus);

  }
 

}