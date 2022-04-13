import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from './types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authorized = new BehaviorSubject<User | null>(null);

  get authorized$() {
    return this.authorized.asObservable();
  }

  constructor(private router: Router, private httpClient: HttpClient) {}
  private usersUrl: string = 'http://localhost:3000/users';

  public logiIn(username: string, password: string) {
    const searchURL = `${this.usersUrl}?username=${username}&password=${password}`;
    console.log(searchURL);

    return this.httpClient.get<User[]>(searchURL).pipe(
      map(
        (value) => {
          if (value.length > 0) {
            this.authorized.next(value[0]);
            localStorage.setItem('user', JSON.stringify(value[0]));
          } else {
            this.authorized.next(null);
          }
        }
        // value.length > 0
        //   ? this.authorized.next(value[0])
        //   : this.authorized.next(null)
      )
    );
  }
  public logout() {
    localStorage.removeItem('user')
    this.authorized.next(null);
    this.router.navigate(['login'])
  }
}
