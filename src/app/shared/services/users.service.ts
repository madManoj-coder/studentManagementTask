import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersKey = 'users';
  private currentUserKey = 'currentUser';

  private users: any[] = [
    { id: '1', name: 'John', role: 'student', contact: '12345' },
    { id: '2', name: 'Alice', role: 'teacher', contact: '67890' },
    { id: '3', name: 'Bob', role: 'student', contact: '11223' }
  ];

  addUser(user: any): void {
    this.users.push(user);
    console.log('User added:', user);
  }

  getUsersByRole(role: string): any[] {
    return this.users.filter(user => user.role === role);
  }

  getUsers(): any[] {
    const storedUsers = localStorage.getItem(this.usersKey);
    return storedUsers ? JSON.parse(storedUsers) : [];
  }

  getCurrentUser(): any {
    const currentUser = localStorage.getItem(this.currentUserKey);
    return currentUser ? JSON.parse(currentUser) : null;
  }

  toggleUserStatus(userId: string): void {
    const users = this.getUsers();
    const user = users.find(u => u.id === userId);

    if (user) {
      user.isActive = !user.isActive;
      this.saveUsers(users);
    }
  }

  updateProfile(updatedProfile: any): Observable<void> {
    const currentUser = this.getCurrentUser();
    if (currentUser) {
      const users = this.getUsers();
      const userIndex = users.findIndex(user => user.id === currentUser.id);

      if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updatedProfile };

        localStorage.setItem(this.usersKey, JSON.stringify(users));
        localStorage.setItem(this.currentUserKey, JSON.stringify(users[userIndex]));
      }
    }

    return new Observable<void>(observer => {
      observer.next();
      observer.complete();
    });
  }

  setCurrentUser(user: any): void {
    localStorage.setItem(this.currentUserKey, JSON.stringify(user));
  }

  saveUsers(users: any[]): void {
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }
}
