import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';  

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const requiredRole = route.data['role']; 

    if (this.authService.isAuthenticated()) {
      const userRole = this.authService.getUserRole(); 

      if (requiredRole && userRole === requiredRole) {
        return true;
      } else {
        this.router.navigate(['/error']); 
        return false;
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
