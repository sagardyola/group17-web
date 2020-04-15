import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule' //lazy loading
    },
    {
        path: 'user',
        loadChildren: './users/users.module#UsersModule'
    },
    {
        path: 'product',
        loadChildren: './products/products.module#ProductsModule'
    },
    {
        path: '**', //wild card entry according to documentation
        component: PageNotFoundComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }