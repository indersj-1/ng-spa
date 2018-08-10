import { Component } from '@angular/core';
import { LoginService } from '../services/login.service'
import { User } from '../services/user'

@Component({
    selector: 'login-form',
    providers: [LoginService],
    templateUrl: './login.component.html'
})
export class LoginComponent {
    status: boolean = false;
    public user = new User('murthy', 'welcome')

    public errorMsg: any = ''

    constructor(private _service: LoginService) { }

    login() {
        if (!this._service.login(this.user)) {
            this.errorMsg = 'Sorry...Invalid Username or Password'
            this.status = false;
        } else {
            this.status = true;
        }
    }
}