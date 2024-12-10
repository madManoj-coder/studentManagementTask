import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm !: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const { name, email, password, role } = this.registrationForm.value;
      if (password === this.registrationForm.get('confirmPassword')?.value) {
        this.authService.register(name, email, password, role).subscribe(response => {
          this.router.navigate(['login']);
        });
      } else {
        alert('Passwords do not match!');
      }
    }
  }

}
