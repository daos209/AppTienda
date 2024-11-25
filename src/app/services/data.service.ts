import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public dbinstance!: SQLiteObject;
  
  constructor(private sqlite: SQLite) { 
    this.initializeDatabase();
  }

  async initializeDatabase() {
    this.dbinstance = await this.sqlite.create({
      name: 'based1.db',
      location: 'default'
    });
    await this.dbinstance.executeSql('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, email VARCHAR(50), password VARCHAR(50))', []);
  }

  async registerUser(email: string, password: string): Promise<boolean> {
    try {
      await this.dbinstance.executeSql('INSERT INTO users (email, password) VALUES (?, ?)', [email, password]);
      return true;
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      return false;
    }
  }

  async loginUser(email: string, password: string): Promise<boolean> {
    try {
      const result = await this.dbinstance.executeSql('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
      return result.rows.length > 0;
    } catch (error) {
      console.error('Error al autenticar usuario:', error);
      return false;
    }
  }
}