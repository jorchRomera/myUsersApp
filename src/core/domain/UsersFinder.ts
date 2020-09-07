import { User } from './User';

export interface UsersFinder {
    get(): Promise<User[]>;
}
