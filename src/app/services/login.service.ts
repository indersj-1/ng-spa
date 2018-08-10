import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {User} from './user'
import {Session} from './globals';

//mock
var users = [
  new User('murthy','welcome'),
  new User('kavitha@gmail.com','hi')
];

@Injectable()
export class LoginService {
private authenticatedUser:User;

  constructor(  private _router: Router){} 

  login(user:User){
    this.authenticatedUser = 
      users.find(res => res.username === user.username);

    if (this.authenticatedUser && 
      this.authenticatedUser.password === user.password){
        
      window.localStorage.setItem("user",this.authenticatedUser.toString());
      //$rootScope
      Session.authenticated=true;
      Session.username=user.username;

      this._router.navigate(['contacts']);  

      return true;
    }
    return false;

  }

logout() {
    localStorage.removeItem("user");
    this._router.navigate(['/']);
    Session.authenticated=false;
  }
  

  checkCredentials(){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['/']);
    }
  }


}
