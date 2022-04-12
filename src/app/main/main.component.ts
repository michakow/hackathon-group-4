import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() appName!: string;
  showButtonAddNew: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
