import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import {User} from './user'
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private storage: SQLiteObject;
  songsList = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform, 
    private sqlite: SQLite, 
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,
  ) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'test.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.storage = db;
          this.getFakeData();
      });
    });
  }

  dbState() {
    return this.isDbReady.asObservable();
  }
 
  fetchUsers(): Observable<User[]> {
    return this.songsList.asObservable();
  }

    // Render fake data
    getFakeData() {
      this.httpClient.get(
        'assets/dump.sql', 
        {responseType: 'text'}
      ).subscribe(data => {
        this.sqlPorter.importSqlToDb(this.storage, data)
          .then(_ => {
            this.getUsers();
            this.isDbReady.next(true);
          })
          .catch(error => console.error(error));
      });
    }

  // Get list
  getUsers(){
    return this.storage.executeSql('SELECT * FROM usuarios', []).then(res => {
      let items: User[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
          items.push({ 
            id: res.rows.item(i).id,
            nombre: res.rows.item(i).nombre,  
            correo: res.rows.item(i).correo,
            genero: res.rows.item(i).genero,
           });
        }
      }
      this.songsList.next(items);
    });
  }

  // Add
  addUser(nombre,correo,genero) {
    let data = [nombre,correo,genero];
    return this.storage.executeSql('INSERT INTO usuarios (nombre, correo,genero) VALUES (?,?, ?)', data)
    .then(res => {
      this.getUsers();
    });
  }
 
  

  // Update
  updateUser(id, user: User) {
    let data = [user.nombre, user.correo,user.genero];
    return this.storage.executeSql(`UPDATE usuarios SET nombre = ?, correo = ?, genero = ? WHERE id = ${id}`, data)
    .then(data => {
      this.getUsers();
    })
  }

  // Delete
  deleteUser(id) {
    return this.storage.executeSql('DELETE FROM usuarios WHERE id = ?', [id])
    .then(_ => {
      this.getUsers();
    });
  }
}
