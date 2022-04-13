import { Component } from '@angular/core';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  faIcon = faPerson

  constructor(private authService: AuthService) { }

  logOut(){
    this.authService.logout();
  }

}
