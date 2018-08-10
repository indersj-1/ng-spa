import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
// import { Session } from 'inspector';
import {Router} from '@angular/router'

export class AlwaysAuthGuard implements CanActivate{
    canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
        console.log("I am always authGuard", state);
        // if(Session.isAuthenticated){
        //     this.router.navigate("contact")
        // }
        return true;
    }
 }
