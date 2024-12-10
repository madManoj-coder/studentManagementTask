import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,  // Inject your AuthService
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // onSubmit(): void {
  //   if (this.loginForm.valid) {
  //     const { email, password } = this.loginForm.value;
  //     this.authService.login(role).subscribe(
  //       (response) => {
  //         console.log('Login successful!', response);
  //         this.router.navigate(['/home']);
  //       },
  //       (error) => {
  //         console.error('Login failed', error);
  //       }
  //     );
  //   } else {
  //     console.log('Form is invalid');
  //   }
  // }

}
