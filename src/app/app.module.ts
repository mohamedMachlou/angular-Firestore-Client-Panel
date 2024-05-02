import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';

import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientModule,
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'firestore-client-panel-725e0',
        appId: '1:504496840180:web:072b688bf442f905b2eda1',
        storageBucket: 'firestore-client-panel-725e0.appspot.com',
        apiKey: 'AIzaSyACDj2qXnApQ-FtZsyjBANod3xqJh7Iomw',
        authDomain: 'firestore-client-panel-725e0.firebaseapp.com',
        messagingSenderId: '504496840180',
        measurementId: 'G-RWS79RPYZ6',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
