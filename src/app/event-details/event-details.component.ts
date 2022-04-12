import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Event } from '../interfaces/event';
import { EventDetailsService } from '../services/event-details.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit {
  comment = new FormControl('');
  event!: Event;

  constructor(private eventDetailsService: EventDetailsService) {}

  ngOnInit(): void {
    this.eventDetailsService.getEventInfo(1).subscribe((res) => {
      if (typeof res !== 'undefined') this.event = res;
      console.log(this.event);
    });
  }

  editEvent() {
    console.log('edit');
  }

  cancelEvent() {
    console.log('cancel');
  }

  addComment() {
    const date = new Date().toLocaleString().split(',')[0];
    console.log(this.comment.value);
    console.log(date);
    this.comment.setValue('');
  }

  log(param: any) {
    console.log(param);
  }
}
