import { User } from '../domain/User';
import { UserService } from '../domain/UserService';

export class FilterUsers {
    private userService: UserService;
    constructor(userService: UserService) {
        this.userService = userService;
    }

    execute(text: string): User[] {
        return this.userService.filterByLastName(text);
    }
}
