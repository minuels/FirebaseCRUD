import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddPersonPage } from '../pages/add-person/add-person';

export const config = {
  apiKey: "AIzaSyDKWQ9jj1yorCZdd1HhNWze76EFQD3_Sa8",
  authDomain: "personas-7c050.firebaseapp.com",
  databaseURL: "https://personas-7c050.firebaseio.com",
  projectId: "personas-7c050",
  storageBucket: "personas-7c050.appspot.com",
  messagingSenderId: "16419017235"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPersonPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPersonPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
