import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../interfaces/event';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class EventsApiService {
  constructor(private http: HttpClient) {}

  getPublicEvents() {
    // return this.http.get<Event[]>('https://hackaton-app135.herokuapp.com/events/public');
    return this.http.get<Event[]>('http://localhost:3000/events');
  }

  getMyEvents(userID: number) {
    return this.http.get<Event[]>(`https://hackaton-app135.herokuapp.com/events/user-events/${userID}`);
  }

  getEventsParticipate(userID: number) {
    return this.http.get<Event[]>(`https://hackaton-app135.herokuapp.com/events/participate/${userID}`);
  }

  getEvent(eventID: number) {
    return this.http.get<Event>(`http://localhost:3000/events/${eventID}`);
  }

  testCors() {
    return this.http.get<User[]>('https://hackaton-app135.herokuapp.com/users');
  }
}
