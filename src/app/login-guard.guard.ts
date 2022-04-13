import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor(private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    const isLocalStorageEmpty = localStorage.getItem('user');
      console.log(isLocalStorageEmpty);

    // if (isLocalStorageEmpty === null) {
    //   return true
    // } else {
    //   this.router.navigate(['events']);
    //   return false
    // }
    return true


  }

}
