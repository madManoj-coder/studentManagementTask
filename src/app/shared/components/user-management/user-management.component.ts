import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  userForm !: FormGroup;
  displayedColumns: string[] = ['name', 'email', 'role', 'status', 'action'];
  users: any[] = [];

  constructor(
    private fb: FormBuilder,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      status: ['', Validators.required]
    });

    this.users = this.userService.getUsers();  
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.userService.addUser(this.userForm.value); // Adjust to your service method
      this.userForm.reset();
    } else {
      console.log('Form is invalid!');
    }
  }

  toggleStatus(userId: string): void {
    this.userService.toggleUserStatus(userId); 
  }

}
