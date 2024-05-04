import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { AuthService } from './client/services/auth.service';
import { environment } from '../environments/environment';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ClientModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
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
    provideFirebaseApp(() => initializeApp({"projectId":"firestore-client-panel-725e0","appId":"1:504496840180:web:072b688bf442f905b2eda1","storageBucket":"firestore-client-panel-725e0.appspot.com","apiKey":"AIzaSyACDj2qXnApQ-FtZsyjBANod3xqJh7Iomw","authDomain":"firestore-client-panel-725e0.firebaseapp.com","messagingSenderId":"504496840180","measurementId":"G-RWS79RPYZ6"})),
    provideAnalytics(() => getAnalytics()),
  ],
  providers: [AuthService, ScreenTrackingService, UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
