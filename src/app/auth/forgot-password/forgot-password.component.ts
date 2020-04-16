import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MsgService } from 'src/app/shared/services/msg.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  submitting: boolean = false;
  user;
  constructor(
    public router: Router,
    public authService: AuthService,
    public msgService: MsgService
  ) {
    this.user = new User({});
  }

  ngOnInit(): void {
  }

  submit() {
    this.submitting = true;
    this.authService.forgotPassword(this.user.email).subscribe(
      data => {
        this.msgService.showInfo('Password reset link sent to email. Please check.');
        this.router.navigate(['/auth/login']);
      },
      error => {
        this.msgService.showError(error);
        this.submitting = false;
      })
  }

}
