import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from 'src/app/shared/models/user.model';
import { MsgService } from 'src/app/shared/services/msg.service';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
    public submitting: boolean = false;
    user;


    constructor(
        public router: Router,
        public msgService: MsgService,
        public authService: AuthService
    ) {
        this.user = new User({});
    }

    ngOnInit() {

    }

    login() {
        this.submitting = true;
        this.authService.login(this.user)
            .subscribe(
                (data: any) => {

                    // localStorage or session storage...session like bank sites
                    // local for fb
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user', JSON.stringify(data.user));



                    this.msgService.showSuccess(`Welcome ${data.user.username}`)
                    this.router.navigate(['/user/dashboard']);
                },
                err => {
                    this.msgService.showError(err);
                    this.submitting = false;
                }
            )

        // alert('Login clicked');
    }

    //assume this is service code
    sendLoginData(data: User) {
        //http call
    }

}