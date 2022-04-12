import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { EventsApiService } from './events-api.service';

@Injectable({
  providedIn: 'root',
})
export class EventDetailsService {
  constructor(private eventsApiService: EventsApiService) {}

  getEventInfo(eventID: number) {
    this.eventsApiService
      .getEvent(eventID)
      .pipe(catchError((err: HttpErrorResponse) => of(err)))
      .subscribe((res) => {
        if (res instanceof HttpErrorResponse) return;
        else return res;
      });
  }
}
