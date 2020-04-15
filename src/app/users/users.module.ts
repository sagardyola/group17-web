import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user.routing';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DashboardComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
