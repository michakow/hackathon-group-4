import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../interfaces/event';

@Injectable({
  providedIn: 'root',
})
export class EventsApiService {
  constructor(private http: HttpClient) {}

  getPublicEvents() {}

  getMyEvents(userID: number) {}

  getEventsParticipate(userID: number) {}

  getEvent(eventID: number) {
    return this.http.get<Event>(`http://localhost:3000/events/${eventID}`);
  }
}
