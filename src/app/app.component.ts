import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stdManagementTask';

  isLoggedIn = false;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  goToHome(){
    this.router.navigate(['/register'])
  }

}
