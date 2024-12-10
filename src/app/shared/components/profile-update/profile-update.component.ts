import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.scss']
})
export class ProfileUpdateComponent implements OnInit {

  profileForm !: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]] 
    });
    const user = this.userService.getCurrentUser();
  }

  saveProfile(): void {
    if (this.profileForm.valid) {
      this.userService.updateProfile(this.profileForm.value).subscribe(() => {
        alert('Profile updated successfully!');
      });
    }
  }

}
