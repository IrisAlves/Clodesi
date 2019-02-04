import { Fav } from './../../models/Fav-item/Fav-item.inteface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the ListaFavProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaFavProvider {
  private reffav = this.dba.list<Fav>('listafavoritos');
  constructor(private dba:AngularFireDatabase) {
   
  }
  addItem(item:Fav){
    return this.reffav.push(item);
  }

  getItemList(){
    return this.reffav;
  }
  editItem(item:Fav){
    return this.reffav.update(item.nombre, item);
  }

  deleteItem(item:Fav){
    return this.reffav.remove (item.nombre);
  }
}
