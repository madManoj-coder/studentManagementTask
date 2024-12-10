import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './shared/components/registration/registration.component';
import { UserManagementComponent } from './shared/components/user-management/user-management.component';
import { ProfileUpdateComponent } from './shared/components/profile-update/profile-update.component';
import { AttendenceListComponent } from './shared/components/attendence-list/attendence-list.component';
import { AttendenceMarkingComponent } from './shared/components/attendence-marking/attendence-marking.component';
import { AttendenceOverviewComponent } from './shared/components/attendence-overview/attendence-overview.component';
import { ChangePasswordComponent } from './shared/components/change-password/change-password.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AuthGuard } from './shared/services/auth.gaurd';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: RegistrationComponent },

  { 
    path: 'attendance-list', 
    component: AttendenceListComponent, 
    canActivate: [AuthGuard], 
    data: { role: 'Student' }  
  },
  { 
    path: 'mark-attendance', 
    component: AttendenceMarkingComponent, 
    canActivate: [AuthGuard], 
    data: { role: 'Student' }
  },
  { 
    path: 'profile', 
    component: ProfileUpdateComponent, 
    canActivate: [AuthGuard], 
    data: { role: 'Student' } 
  },

  { 
    path: 'attendance-overview', 
    component: AttendenceOverviewComponent, 
    canActivate: [AuthGuard], 
    data: { role: 'Teacher' }  
  },
  { 
    path: 'attendance-list', 
    component: AttendenceListComponent, 
    canActivate: [AuthGuard], 
    data: { role: 'Teacher' }  
  },

  { 
    path: 'user-management', 
    component: UserManagementComponent, 
    canActivate: [AuthGuard], 
    data: { role: 'Admin' }  
  },
  { 
    path: 'change-password', 
    component: ChangePasswordComponent, 
    canActivate: [AuthGuard], 
    data: { role: 'Admin' }  
  },

  // { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
