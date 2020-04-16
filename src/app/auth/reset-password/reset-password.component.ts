import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MsgService } from 'src/app/shared/services/msg.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  token: string;
  user;
  submitting: boolean = false;
  constructor(
    public activeRoute: ActivatedRoute,
    public router: Router,
    public authService: AuthService,
    public msgService: MsgService

  ) {
    this.token = this.activeRoute.snapshot.params['token'];
    console.log('token', this.token);
  }

  ngOnInit(): void {
    this.user = new User({});
  }

  submit() {
    this.submitting = true;
    this.authService.resetPassword(this.token, this.user).subscribe(
      data => {
        this.msgService.showInfo('Reset Successful. Please login.');
        this.router.navigate(['/auth/login']);
      },
      error => {
        this.msgService.showError(error);
        this.submitting = false;
      })
  }


}
