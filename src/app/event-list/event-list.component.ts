import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Event } from '../interfaces/event';
import { EventListService } from '../services/event-list.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  route!: string;
  userID: number = 1;

  eventList: Event[] = [];

  constructor(private eventListService: EventListService, private router: Router) {}

  ngOnInit(): void {
    this.route = this.router.url.split('/').slice(-1).toString();
    console.log(this.route);
    if (this.route === 'events') {
      this.eventListService.getPublicEvents().subscribe((res) => {
        this.eventList = res;
        console.log(res);
      });
    }
    if (this.route === 'my-events') {
      this.eventListService.getMyEvents(this.userID).subscribe((res) => {
        this.eventList = res;
        console.log(res);
      });
    }
    if (this.route === 'participated') {
      this.eventListService.getEventsParticipate(this.userID).subscribe((res) => {
        this.eventList = res;
        console.log(res);
      });
    }

    this.eventListService.getUsers().subscribe(console.log);
  }

  showEvent(id: number) {
    this.router.navigate(['events', 'details', id]);
  }
}
