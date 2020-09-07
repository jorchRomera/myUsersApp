import { Provider } from '../../core/Provider';
import { UsersPresenter, UsersView } from './users/UsersPresenter';
import { UserDetailsPresenter, UserDetailsView } from './userDetail/UserDetailsPresenter';

export class PresenterFactory {
    users(view: UsersView): UsersPresenter {
        return new UsersPresenter(view, Provider.getUsers(), Provider.filterUsers());
    }

    userDetails(view: UserDetailsView): UserDetailsPresenter {
        return new UserDetailsPresenter(view);
    }
}
