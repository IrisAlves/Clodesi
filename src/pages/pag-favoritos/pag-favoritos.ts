import { Fav } from './../../models/Fav-item/Fav-item.inteface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PagFavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pag-favoritos',
  templateUrl: 'pag-favoritos.html',
})
export class PagFavoritosPage {
  list : Fav;
  constructor(public navCtrl: NavController, public navParams: NavParams,public LFavPro: ListaFavProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagFavoritosPage');
  }

}

