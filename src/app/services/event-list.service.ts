import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { EventsApiService } from './events-api.service';

@Injectable({
  providedIn: 'root',
})
export class EventListService {
  constructor(private eventsApiService: EventsApiService) {}

  getPublicEvents() {
    return this.eventsApiService.getPublicEvents().pipe(
      catchError((err: HttpErrorResponse) => of(err)),
      map((res) => {
        if (res instanceof HttpErrorResponse) return [];
        else return res;
      })
    );
  }

  getMyEvents(userID: number) {
    return this.eventsApiService.getMyEvents(userID).pipe(
      catchError((err: HttpErrorResponse) => of(err)),
      map((res) => {
        if (res instanceof HttpErrorResponse) return [];
        else return res;
      })
    );
  }

  getEventsParticipate(userID: number) {
    return this.eventsApiService.getEventsParticipate(userID).pipe(
      catchError((err: HttpErrorResponse) => of(err)),
      map((res) => {
        if (res instanceof HttpErrorResponse) return [];
        else return res;
      })
    );
  }

  getUsers() {
    return this.eventsApiService.testCors();
  }
}
