import { anything, capture, instance, mock, verify, when } from 'ts-mockito';
import { UsersPresenter, UsersView } from './UsersPresenter';
import { GetUsers } from '../../../core/useCases/GetUsers';
import { FilterUsers } from '../../../core/useCases/FilterUsers';
import { aUser, otherUser } from '../../../testing/fixtures/UsersFixtures';
import { UserVM } from './UserVM';
import { User } from '../../../core/domain/User';
import { aUserVM } from '../../../testing/fixtures/UsersVMFixtures';

describe('UsersPresenter should', () => {
    it('present the list of users in the proper format', async () => {
        when(getUsers.execute()).thenResolve([aUser, otherUser]);

        await presenter.start();

        verify(getUsers.execute()).called();
        const [viewModels] = capture(viewMock.showUsers).last();
        expect(viewModels.length).toBe(2);
        expectToBeProperlyFormatted(viewModels[0], aUser);
        expectToBeProperlyFormatted(viewModels[1], otherUser);
    });

    it('present a loading while fetching users on screen load', async () => {
        when(getUsers.execute()).thenResolve([]);

        await presenter.start();

        verify(viewMock.showLoading()).calledBefore(getUsers.execute());
        verify(viewMock.hideLoading()).calledAfter(getUsers.execute());
    });

    it('navigates to user detail on selectUser', async () => {
        await presenter.selectUser(aUserVM);

        verify(viewMock.navigateToUserDetail(aUserVM)).called();
    });

    it('change Pagination on ChangePage', async () => {
        const pageToGo = 3;
        await presenter.changePage(pageToGo);

        verify(viewMock.showUsers(anything())).called();
        verify(viewMock.changePage(pageToGo)).called();
    });

    it('filter by last name on searchUser and restart pagination', async () => {
        const text = 'b';
        const usersFiltered = [aUser, otherUser];
        const defaultLimit = 15;
        when(filterUsers.execute(text)).thenReturn(usersFiltered);

        await presenter.searchUser(text);

        verify(viewMock.updateSearch(text)).called();
        verify(filterUsers.execute(text)).called();
        verify(viewMock.initializePagination(usersFiltered.length, defaultLimit)).called();
        verify(viewMock.changePage(1)).called();
    });

    function expectToBeProperlyFormatted(userVM: UserVM, user: User) {
        expect(userVM.id).toBe(user.id);
        expect(userVM.name).toBe(`${user.lastName}, ${user.firstname}`);
        expect(userVM.phone).toBe(user.phone);
        expect(userVM.picture).toBe(user.picture);
        expect(userVM.street).toBe(user.location.street);
        expect(userVM.city).toBe(user.location.city);
    }

    beforeEach(() => {
        viewMock = mock<UsersView>();
        getUsers = mock(GetUsers);
        filterUsers = mock(FilterUsers);
        presenter = createPresenter();
    });

    function createPresenter(): UsersPresenter {
        return new UsersPresenter(
            instance(viewMock),
            instance(getUsers),
            instance(filterUsers),
        );
    }

    let presenter: UsersPresenter;
    let viewMock: UsersView;
    let getUsers: GetUsers;
    let filterUsers: FilterUsers;
});
