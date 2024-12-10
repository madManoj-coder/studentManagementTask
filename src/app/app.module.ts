import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material/material.module';
import { RegistrationComponent } from './shared/components/registration/registration.component';
import { AttendenceListComponent } from './shared/components/attendence-list/attendence-list.component';
import { UserManagementComponent } from './shared/components/user-management/user-management.component';
import { ProfileUpdateComponent } from './shared/components/profile-update/profile-update.component';
import { AttendenceMarkingComponent } from './shared/components/attendence-marking/attendence-marking.component';
import { AttendenceOverviewComponent } from './shared/components/attendence-overview/attendence-overview.component';
import { ChangePasswordComponent } from './shared/components/change-password/change-password.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { LoginComponent } from './shared/components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AttendenceListComponent,
    UserManagementComponent,
    ProfileUpdateComponent,
    AttendenceMarkingComponent,
    AttendenceOverviewComponent,
    ChangePasswordComponent,
    PageNotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
