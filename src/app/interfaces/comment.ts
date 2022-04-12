import { User } from './user';

export interface Comment {
  author: User;
  text: string;
  date: string;
}
