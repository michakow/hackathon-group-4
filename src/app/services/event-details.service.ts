import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { Comment } from '../interfaces/comment';
import { EventsApiService } from './events-api.service';

@Injectable({
  providedIn: 'root',
})
export class EventDetailsService {
  constructor(private eventsApiService: EventsApiService) {}

  getEventInfo(eventID: number) {
    return this.eventsApiService.getEvent(eventID).pipe(
      catchError((err: HttpErrorResponse) => of(err)),
      map((res) => {
        if (res instanceof HttpErrorResponse) return;
        else return res;
      })
    );
  }

  cancelEvent(eventID: number) {
    console.log('anulowanie wydarzenia o ID:', eventID);
  }

  editEvent(eventID: number) {
    console.log('edycja wydarzenia o ID:', eventID);
  }

  addComent(eventID: number, comment: Comment) {
    this.eventsApiService.addCommentToEvent(eventID, comment);
    console.log('wydarzenie o ID:', eventID);
    console.log('komentarz:', comment);
  }
}
