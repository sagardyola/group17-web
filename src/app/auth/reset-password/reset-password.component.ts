import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  token: string;
  constructor(
    public activeRoute: ActivatedRoute
  ) {
    this.token = this.activeRoute.snapshot.params['token'];
    console.log('token', this.token);
  }



  ngOnInit(): void {
  }

}
