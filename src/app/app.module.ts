import { PagAjustesPage } from './../pages/pag-ajustes/pag-ajustes';
import { PagFavoritosPage } from './../pages/pag-favoritos/pag-favoritos';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PagChaquetasPage } from '../pages/pag-chaquetas/pag-chaquetas';
import { PagJerseyPage } from '../pages/pag-jersey/pag-jersey';
import { PagChaq1Page } from '../pages/pag-chaquetas/pag-chaqueta1/pag-chaq1';
import {IonicImageViewerModule} from 'ionic-img-viewer';
import { PagJersey1Page } from '../pages/pag-jersey/pag-jersey1/pag-jersey1';
import { PagJersey2Page } from '../pages/pag-jersey/pag-jersey2/pag-jersey2';
import { PagChaq2Page } from '../pages/pag-chaquetas/pag-chaqueta2/pag-chaq2';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';

// comando por si img-viewer da fallo: npm install --save ionic-img-viewer

import 'firebase/database';
import { AngularFireModule } from '@angular/fire';

export const firebaseConfig = {
    apiKey: "AIzaSyDLjQIylLhb61LhL9IKo9sC8tUiNC4lSS4",
    authDomain: "clodesi.firebaseapp.com",
    databaseURL: "https://clodesi.firebaseio.com",
    projectId: "clodesi",
    storageBucket: "clodesi.appspot.com",
    messagingSenderId: "859487476993"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PagFavoritosPage,
    PagAjustesPage,
    PagChaquetasPage,
    PagChaq1Page,
    PagChaq2Page,
    PagJerseyPage,
    PagJersey1Page,
    PagJersey2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule,  
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig,'Clodesi'),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PagFavoritosPage,
    PagAjustesPage,
    PagChaquetasPage,
    PagChaq1Page,
    PagChaq2Page,
    PagJerseyPage,
    PagJersey1Page,
    PagJersey2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {
}



