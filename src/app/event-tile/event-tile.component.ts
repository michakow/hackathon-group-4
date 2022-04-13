import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../interfaces/event';

@Component({
  selector: 'app-event-tile',
  templateUrl: './event-tile.component.html',
  styleUrls: ['./event-tile.component.scss'],
})
export class EventTileComponent implements OnInit {
  @Input() event!: Event;
  constructor() {}

  ngOnInit(): void {}
}
