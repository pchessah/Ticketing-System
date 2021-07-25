import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../services/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(
    public userAuthService:UserAuthService,
    public router: Router
  ){ }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {
      if(this.userAuthService.adminChecker !== true) {
        window.alert('Access Denied, Login is Required to Access This Page!')
        this.userAuthService.SignOut()
        this.router.navigate(['sign-in'])
      }
      return true;
    }
  
}
