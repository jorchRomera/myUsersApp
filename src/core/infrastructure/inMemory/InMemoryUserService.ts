import { User } from '../../domain/User';
import { UserService } from '../../domain/UserService';

export class InMemoryUserService implements UserService {
    private users: User[] = [];

    updateRepository(users: User[]): void { this.users = users; }

    filterByLastName(text: string): User[] {
        return this.users.filter(user => user.lastName.toLowerCase().includes(text.toLowerCase()));
    }

    get(): User[] { return this.users; }
}
