import { User } from './User';

export interface UserService {
    filterByLastName(text: string): User[];
    updateRepository(users: User[]): void;
    get(): User[];
}
