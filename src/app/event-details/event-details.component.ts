import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Comment } from '../interfaces/comment';
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
    this.eventDetailsService.getEventInfo(0).subscribe((res) => {
      if (typeof res !== 'undefined') this.event = res;
      console.log(this.event);
    });
  }

  editEvent() {
    this.eventDetailsService.editEvent(this.event.id);
  }

  cancelEvent() {
    this.eventDetailsService.cancelEvent(this.event.id);
  }

  addComment() {
    const date = new Date().toLocaleString().split(',')[0];
    const comment: Comment = {
      author: 'Jan Kazek',
      date: date,
      text: this.comment.value.slice(0, -1),
    };
    this.eventDetailsService.addComent(this.event.id, comment);
    this.comment.setValue('');
    this.event.comments.push(comment);
  }
}
