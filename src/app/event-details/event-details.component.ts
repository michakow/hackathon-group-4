import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit {
  comment = new FormControl('');
  constructor() {}

  ngOnInit(): void {}

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
}
