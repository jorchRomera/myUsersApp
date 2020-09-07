import { User } from './User';

export class UsersSorter {
    sortByLastName(users: User[]): User[] {
        return users.sort((currentUser: User, nextUser: User) => currentUser.lastName > nextUser.lastName ? 1 : -1 );
    }
}
