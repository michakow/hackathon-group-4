import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, take } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.authService.authorized$.pipe(
      take(1),
      map((user) => {
        return !!user;
      }),
      tap((canActivate) => {
        if(!canActivate){
          this.router.navigate(['login'])
        }
      })
    );
  }
}
