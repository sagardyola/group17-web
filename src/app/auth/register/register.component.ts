import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { MsgService } from 'src/app/shared/services/msg.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user;
  submitting: boolean = false;
  constructor(
    public msgService: MsgService,
    public authService: AuthService,
    public router: Router
  ) {
    this.user = new User({});
    console.log('User>>', this.user);
  }

  ngOnInit(): void {
    //life cycle hook
  }
  submit() {
    this.submitting = true;
    this.authService.register(this.user)
      .subscribe(
        (data) => {
          this.msgService.showInfo('Registration successful please login');
          this.router.navigate(['/auth/login']);
        },
        error => {
          this.msgService.showError(error);
          this.submitting = false;
        }
      )


  }

}
