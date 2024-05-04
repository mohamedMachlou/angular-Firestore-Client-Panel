import { Injectable, inject } from '@angular/core';
import {
  getAuth,
  createUserWithEmailAndPassword,
  Auth,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth: Auth = getAuth();

  constructor() {}
  register(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        console.log('Machlou register');
      })
      .catch((err) => {
        console.log('Machlou error');
      });
  }
}
