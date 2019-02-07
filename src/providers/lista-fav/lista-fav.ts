import { Fav } from './../../models/Fav-item/Fav-item.inteface';

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

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

  mostrar(item:Fav){
    return this.reffav.set (item.nombre,item);
  }
  
 
}
