import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';

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
    private navCtrl: NavController,
    private toastController: ToastController
  ) {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      birthdate: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      address: ['', Validators.required]
    });
  }

  async submitForm() {
    if (this.myForm.valid) {
      const loading = await this.loadingController.create({
        message: 'Enviando...',
        spinner: 'crescent',
        duration: 2000
      });
      await loading.present();

      setTimeout(async () => {
        await loading.dismiss();
        this.navCtrl.navigateBack('/home');
        this.presentToast('Formulario enviado con éxito');
      }, 2000);
    } else {
      this.presentToast('Por favor, complete todos los campos correctamente');
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