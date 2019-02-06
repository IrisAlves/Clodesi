
import { Component, ViewChild } from '@angular/core';
import { Platform,Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PagFavoritosPage } from '../pages/pag-favoritos/pag-favoritos';
import { PagAjustesPage } from '../pages/pag-ajustes/pag-ajustes';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  text: string = '';
//paginas que se va ver el menu lateral
  paginas:Array<{title:string,component:any}>;

  constructor( public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.paginas=[
      {title:'Home',component:HomePage},
      {title:'Favoritos',component:PagFavoritosPage},
      {title:'Contacto',component:PagAjustesPage}
  ];
  }


  initializeApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  
   openPage(pag: { component: any; }) {
    
    this.nav.push(pag.component);
  }

}

