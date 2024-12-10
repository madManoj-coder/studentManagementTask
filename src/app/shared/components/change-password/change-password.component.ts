import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm !: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.changePasswordForm = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: ['', Validators.required]
    }, { validators: this.passwordMatcher });
  }

  passwordMatcher(group: FormGroup): { [key: string]: boolean } | null {
    const newPassword = group.get('newPassword');
    const confirmNewPassword = group.get('confirmNewPassword');
    if (newPassword && confirmNewPassword && newPassword.value !== confirmNewPassword.value) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.changePasswordForm.valid) {
      const { oldPassword, newPassword } = this.changePasswordForm.value;
      this.authService.changePassword(oldPassword, newPassword).subscribe(
        () => {
          alert('Password changed successfully!');
          this.changePasswordForm.reset();
        },
        (error) => {
          alert('Error changing password!');
          console.error(error);
        }
      );
    } else {
      console.log('Form is invalid!');
    }
  }

}
