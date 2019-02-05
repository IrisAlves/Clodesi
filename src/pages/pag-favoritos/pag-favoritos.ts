import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Fav } from './../../models/Fav-item/Fav-item.inteface';
import { ListaFavProvider } from './../../providers/lista-fav/lista-fav';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-pag-favoritos',
  templateUrl: 'pag-favoritos.html',
})
export class PagFavoritosPage {

  listafav : Observable<Fav[]>;
  list : any=PagFavoritosPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public LFavPro: ListaFavProvider) {

    this.list = navParams.get ("list");
    this.listafav = this.LFavPro
        .getItemList()  
        .snapshotChanges() 
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

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagFavoritosPage');
  }

  borrar (indice:number){
    this.list.splice(indice,1);
  }

  borrar2 (list:Fav){
    this.LFavPro.deleteItem(list);
  }

}

