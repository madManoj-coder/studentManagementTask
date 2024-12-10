import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

  errorMessage: string = 'Page not found!';

  constructor(private router: Router) {}

  navigateHome(): void {
    this.router.navigate(['/']);
  }

}
