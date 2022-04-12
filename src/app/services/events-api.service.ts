import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventsApiService {
  constructor(private http: HttpClient) {}

  getPublicEvents() {}

  getMyEvents(userID: number) {}

  getEventsParticipate(userID: number) {}

  getEvent(eventID: number) {}
}
