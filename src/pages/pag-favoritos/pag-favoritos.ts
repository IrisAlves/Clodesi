import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { Fav } from './../../models/Fav-item/Fav-item.inteface';

import { ListaFavProvider } from './../../providers/lista-fav/lista-fav';
 import { Observable } from 'rxjs';
 import {map} from 'rxjs/operators';


@IonicPage()
@Component({
  selector: 'page-pag-favoritos',
  templateUrl: 'pag-favoritos.html',
})
export class PagFavoritosPage {

  listafav : Observable<Fav[]>;
  lista : Fav;
  actionSheetCtrl: any;
  
  constructor( private LFavPro: ListaFavProvider,public navCtrl: NavController, public navParams: NavParams)
   {

    this.lista = navParams.get ("list");
    
    this.listafav = this.LFavPro
    .getItemList()  //devuelve la DB LIST
    .snapshotChanges() //valores
    .pipe (map ( changes => {
        return changes.map ( c=>(
          {
            key: c.payload.key,
            ...c.payload.val(),
          }
        )
        )
    }
    )
    )
    // this.LFavPro.mostrar(this.lista);

                  console.log('holaa entre aqui');

  }//fin construtor

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagFavoritosPage');
  }


  borrar2 (item:Fav){
    
    this.LFavPro.deleteItem(item);
  }
  
  item(item: any): any {
    throw new Error("Method not implemented.");
  }


  ver(item:Fav){
this.LFavPro.mostrar(item);

  }

}

