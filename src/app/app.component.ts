import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'group17-web';
  user;
  constructor(
    public router: Router
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));

  }

  isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }
}
