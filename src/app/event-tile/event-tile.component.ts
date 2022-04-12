import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-tile',
  templateUrl: './event-tile.component.html',
  styleUrls: ['./event-tile.component.scss'],
})
export class EventTileComponent implements OnInit {
  @Input() event!: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.event);
  }
}
