import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  eventList: any = [
    {
      name: 'event',
      desc: 'jakis opis',
      peaople: [
        {
          name: 'Jan Kowalski',
        },
        {
          name: 'Barbara Janko',
        },
      ],
      author: 'Jan Kowalski',
    },
    {
      name: 'event',
      desc: 'jakis opis',
      peaople: [
        {
          name: 'Jan Kowalski',
        },
        {
          name: 'Barbara Janko',
        },
      ],
      author: 'Jan Kowalski',
    },
    {
      name: 'event',
      desc: 'jakis opis',
      peaople: [
        {
          name: 'Jan Kowalski',
        },
        {
          name: 'Barbara Janko',
        },
      ],
      author: 'Jan Kowalski',
    },
    {
      name: 'event',
      desc: 'jakis opis',
      peaople: [
        {
          name: 'Jan Kowalski',
        },
        {
          name: 'Barbara Janko',
        },
      ],
      author: 'Jan Kowalski',
    },
    {
      name: 'event',
      desc: 'jakis opis',
      peaople: [
        {
          name: 'Jan Kowalski',
        },
        {
          name: 'Barbara Janko',
        },
      ],
      author: 'Jan Kowalski',
    },
    {
      name: 'event',
      desc: 'jakis opis',
      peaople: [
        {
          name: 'Jan Kowalski',
        },
        {
          name: 'Barbara Janko',
        },
      ],
      author: 'Jan Kowalski',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
