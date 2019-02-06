import { ListaFavProvider } from './../../../providers/lista-fav/lista-fav';
import { Fav } from './../../../models/Fav-item/Fav-item.inteface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pag-jer2',
  templateUrl: 'pag-jersey2.html',
})
export class PagJersey2Page {

  images=['1.jpg','2.jpg','3.jpg'];
  
  list:Array<{nombre: string, img: string}>;
  lista:Fav;
  constructor(public navCtrl: NavController, public navParams: NavParams,public LFavPro: ListaFavProvider,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagJersey2Page');
  }
  
  anadirfav(nomb:string,img:string){

    this.lista = {
      nombre : nomb,
      imagen : img
    };
    this.LFavPro.addItem(this.lista).then ( ref =>{
      console.log (ref.key);
      // this.navCtrl.setRoot ("HomePage");
    });

    let alert = this.alertCtrl.create({
      title: 'Aviso',
      subTitle: 'Se ha añadido a Favoritos',
      buttons: ['OK']
    });
    alert.present();
  }
}