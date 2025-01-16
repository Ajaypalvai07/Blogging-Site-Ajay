import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [FormsModule, CommonModule,HttpClientModule], 
  providers: [AuthService] 
})
export class RegisterComponent {
  newUser = {
    name: '',
    email: '',
    password: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

  registerUser() {
    this.http.post('http://localhost:3000/users', this.newUser).subscribe(() => {
      alert('Registration successful');
      this.router.navigate(['/login']);
    });
  }
}
