import { Comment } from './comment';
import { User } from './user';

export interface Event {
  id: number;
  name: string;
  description: string;
  author: User;
  comments: Comment[];
  dateOfEventStart: string;
  dateOfEventStop: string;
  eventType: string;
  location: string;
  registrants: User[];
}
