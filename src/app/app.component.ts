import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  appName: string = 'Integracje';
  constructor() {}

  ngOnInit(): void {
    console.log('Initial commit - Damian');
  }
}
