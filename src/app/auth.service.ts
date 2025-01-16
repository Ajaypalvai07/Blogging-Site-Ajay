import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  
  signup(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, user).pipe(
      catchError((error) => {
        console.error('Signup failed', error);
        return of(null); 
      })
    );
  }

  
  login(credentials: any): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/users`, {
        params: { email: credentials.email, password: credentials.password },
      })
      .pipe(
        catchError((error) => {
          console.error('Login failed', error);
          return of(null); 
        })
      );
  }

  
  setLoginStatus(user: any): void {
    localStorage.setItem('user', JSON.stringify(user)); 
  }

  
  isLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    if (user) {
      return true; 
    }
    return false;
  }

  
  logout(): void {
    localStorage.removeItem('user'); 
  }

  
  getUser(): any {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user); 
    }
    return null;
  }
}
