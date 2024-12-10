import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:4200';
  private isLoggedIn = false;
  private userRole: string | null = null; 
  private currentUserKey = 'currentUser';

  constructor(private http : HttpClient) {}

  register(name: string, email: string, password: string, role: string): Observable<any> {
    const newUser = { name, email, password, role };
    localStorage.setItem('user', JSON.stringify(newUser));
    return of({ success: true });  
  }

  changePassword(oldPassword: string, newPassword: string): Observable<any> {
    const body = {
      oldPassword,
      newPassword
    };
    return this.http.put(`${this.apiUrl}/change-password`, body); 
  }

  getCurrentUser(): any {
    const currentUser = localStorage.getItem(this.currentUserKey);
    return currentUser ? JSON.parse(currentUser) : null;
  }

  login(role: string) {
    this.isLoggedIn = true;  
    this.userRole = role;    
    localStorage.setItem('userRole', role); 
  }

  logout() {
    this.isLoggedIn = false;
    this.userRole = null;
    localStorage.removeItem('userRole');
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;  
  }

  getUserRole(): string | null {
    return this.userRole || localStorage.getItem('userRole');  
  }
}
