import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const authRoute: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    }, {
        path: 'reset/:token',
        component: ResetPasswordComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(authRoute)],
    exports: [RouterModule]
})

export class AuthRoutingModule {

}