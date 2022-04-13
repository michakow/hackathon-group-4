import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../interfaces/event';
import { User } from '../interfaces/user';
import { Comment } from '../interfaces/comment';

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
    // return this.http.get<Event[]>(`https://hackaton-app135.herokuapp.com/events/user-events/${userID}`);
    return this.http.get<Event[]>(`http://localhost:3000/events?author.id=${userID}`);
  }

  getEventsParticipate(userID: number) {
    // return this.http.get<Event[]>(`https://hackaton-app135.herokuapp.com/events/participate/${userID}`);
    return this.http.get<Event[]>('http://localhost:3000/events');
  }

  getEvent(eventID: number) {
    return this.http.get<Event>(`http://localhost:3000/events/${eventID}`);
  }

  addCommentToEvent(eventID: number, comment: Comment) {
    // this.http.post<Comment>(`http://localhost:3000/events/${eventID}`, { eventID, ...comment });
  }

  testCors() {
    return this.http.get<User[]>('https://eventualniezadziala.herokuapp.com/users');
  }
}
