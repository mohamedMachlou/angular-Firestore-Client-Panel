import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  authService = inject(AuthService);
  email = 'test@gmail.com';
  password = '12345678';
  registerUser(f: any) {
    this.authService.register(f.value.email, f.value.password);
    console.log(f.value);
  }
}
