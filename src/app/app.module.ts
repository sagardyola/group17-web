import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { ToastrModule } from 'ngx-toastr';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    // FormsModule,
    // RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    AuthModule,
    SharedModule,
    UsersModule,
    ProductsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
