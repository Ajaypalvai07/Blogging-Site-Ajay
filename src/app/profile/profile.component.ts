import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [FormsModule, CommonModule,HttpClientModule], 
  providers: [AuthService] 
})
export class ProfileComponent implements OnInit {
  user: any = {};
  updatedUser: any = {};

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile() {
    const user = localStorage.getItem('user');
    this.user = user ? JSON.parse(user) : null;
    if (!this.user) {
      this.router.navigate(['/login']);
    } else {
      this.updatedUser = { ...this.user };
    }
  }

  updateProfile() {
    this.http
      .put(`http://localhost:3000/users/${this.user.id}`, this.updatedUser)
      .subscribe(() => {
        localStorage.setItem('user', JSON.stringify(this.updatedUser));
        alert('Profile updated successfully');
      });
  }
}
