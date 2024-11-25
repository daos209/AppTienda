import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  currentImage: any;
  currentLocation: any;
  weather: any;

  constructor(private camera: Camera, private geolocation: Geolocation, private weatherService: WeatherService) {}

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log("Camera issue: " + err);
    });
  }

  getCurrentLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.currentLocation = {
        latitude: resp.coords.latitude,
        longitude: resp.coords.longitude
      };
      this.getWeather(this.currentLocation.latitude, this.currentLocation.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getWeather(lat: number, lon: number) {
    this.weatherService.getWeather(lat, lon).subscribe(data => {
      this.weather = data;
      console.log(this.weather);
    });
  }

  openWhatsApp() {
    const phoneNumber = '1234567890'; // Reemplaza con el número de teléfono deseado
    const message = 'Hola, necesito ayuda con...'; // Mensaje predefinido
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}