import { instance, mock, when } from 'ts-mockito';
import { GetUsers } from './GetUsers';
import { UsersFinder } from '../domain/UsersFinder';
import { UserService } from '../domain/UserService';
import { UsersSorter } from '../domain/UsersSorter';
import { HttpUsersFinder } from '../infrastructure/http/HttpUsersFinder';
import { InMemoryUserService } from '../infrastructure/inMemory/InMemoryUserService';
import {
    anotherUser,
    aUser,
    aUserWithLastnameArmstrong,
    aUserWithLastnameBrown,
    aUserWithLastnameCarpenter,
    otherUser,
} from '../../testing/fixtures/UsersFixtures';

describe('GetUsers should', () => {
    it('retrieve all users', async () => {
        when(usersFinder.get()).thenResolve([aUser, otherUser, anotherUser]);

        const userList = await useCase().execute();

        expect(userList).toEqual([aUser, otherUser, anotherUser]);
    });

    it('retrieve all users ordered by lastname', async () => {
        when(usersFinder.get()).thenResolve(
            [aUserWithLastnameBrown, aUserWithLastnameCarpenter, aUserWithLastnameArmstrong],
        );

        const orderedList = await useCase().execute();

        expect(orderedList).toEqual([aUserWithLastnameArmstrong, aUserWithLastnameBrown, aUserWithLastnameCarpenter]);
    });

    it('update the users to the in memory repository', async () => {
        let users = userService.get();
        expect(users.length).toEqual(0);
        when(usersFinder.get()).thenResolve([aUser, otherUser, anotherUser]);

        await useCase().execute();

        users = userService.get();
        expect(users.length).toEqual(3);
        expect(users).toEqual([aUser, otherUser, anotherUser]);
    });

    beforeEach(() => {
        usersFinder = mock(HttpUsersFinder);
        usersSorter = new UsersSorter();
        userService = new InMemoryUserService();
    });

    function useCase() {
        return new GetUsers(instance(usersFinder), usersSorter, userService);
    }

    let usersFinder: UsersFinder;
    let usersSorter: UsersSorter;
    let userService: UserService;
});
