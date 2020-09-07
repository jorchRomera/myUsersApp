import { UsersFinder } from '../domain/UsersFinder';
import { User } from '../domain/User';
import { UsersSorter } from '../domain/UsersSorter';
import { UserService } from '../domain/UserService';

export class GetUsers {
    private readonly usersFinder: UsersFinder;
    private readonly usersSorter: UsersSorter;
    private readonly userService: UserService;

    constructor(usersFinder: UsersFinder, usersSorter: UsersSorter, userService: UserService) {
        this.usersFinder = usersFinder;
        this.usersSorter = usersSorter;
        this.userService = userService;
    }

    async execute(): Promise<User[]> {
        const users = await this.usersFinder.get();
        this.userService.updateRepository(users);
        return this.usersSorter.sortByLastName(users);
    }
}
