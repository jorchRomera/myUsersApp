import { aUserWithLastnameArmstrong, aUserWithLastnameBrown, aUserWithLastnameCarpenter } from '../../testing/fixtures/UsersFixtures';
import { FilterUsers } from './FilterUsers';
import { InMemoryUserService } from '../infrastructure/inMemory/InMemoryUserService';
import { UserService } from '../domain/UserService';

describe('FilterUsers should', () => {
    it('filter users by lastname', async () => {
        userService.updateRepository([aUserWithLastnameArmstrong, aUserWithLastnameBrown, aUserWithLastnameCarpenter]);

        const userList = await useCase().execute('ar');

        expect(userList).toEqual([aUserWithLastnameArmstrong, aUserWithLastnameCarpenter]);
    });

    beforeEach(() => {
        userService = new InMemoryUserService();
    });

    function useCase() {
        return new FilterUsers(userService);
    }

    let userService: UserService;
});
