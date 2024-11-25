import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  async canActivate(): Promise<boolean> {
    const isLoggedIn = await this.storage.get('loggedIn');
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
