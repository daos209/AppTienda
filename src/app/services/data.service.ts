import { Injectable } from '@angular/core';
import { SQLite,SQLiteObject } from '@awesome-cordova-plugins/sqlite';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  public dbinstance!:SQLiteObject;
  
  constructor(private sqlite: typeof SQLite ) { }

  async initializeDatabase() {
    this.dbinstance = await this.sqlite.create({
      name: 'based1.db',
      location: 'default'
    });
    await this.dbinstance.executeSql('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, name VARCHAR(32))',[]);
  }
  
  async createTable() {
    await this.dbinstance.executeSql(`
      CREATE TABLE IF NOT EXISTS usuario (
        rut VARCHAR(12) PRIMARY KEY, -- Identificador único
        nombre VARCHAR(50) NOT NULL, -- Nombre del docente
        apellidop VARCHAR(50) NOT NULL, -- Apellido paterno 
        apellidom VARCHAR(50) NOT NULL, -- Apellido materno
        profesion VARCHAR(100) NOT NULL, -- Profesión 
        horas_disponibles INT NOT NULL -- Número de horas disponibles 
      ) 
    `, []);
  }

  //registrar usuario con los nuevos campos
  async registerUser(rut: string, nombre: string, apellidop: string, apellidom: string, profesion: string, horas_disponibles: number) {
    try {
      await this.dbinstance.executeSql(`
        INSERT INTO usuario (rut, nombre, apellidop, apellidom, profesion, horas_disponibles)
        VALUES (?, ?, ?, ?, ?, ?)
      `, [rut, nombre, apellidop, apellidom, profesion, horas_disponibles]);
      return true;
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      return false;
    }
}
}