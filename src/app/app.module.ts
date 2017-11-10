import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// npm install firebase --save để cài đặt và sau đó import firebase vào
import firebase from 'firebase';
//tạo firebase.initializeApp() và truyền vào các thông số lấy từ Add Firebase to your web app trong console firebase của project
firebase.initializeApp({
  // lấy đoạn này
  apiKey: "AIzaSyBSnvVFZflkWYx0MTFfDlhVmWbzVkMdf8E",
  authDomain: "fir-login-220796.firebaseapp.com",
  databaseURL: "https://fir-login-220796.firebaseio.com",
  projectId: "fir-login-220796",
  storageBucket: "fir-login-220796.appspot.com",
  messagingSenderId: "612205607276"
});

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
