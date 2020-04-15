import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const userRouteConfig: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'change-pasword',
        component: ChangePasswordComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(userRouteConfig)],
    exports: [RouterModule]
})

export class UserRoutingModule {

}