import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() appName!: string;

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
