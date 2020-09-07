import { UserVM } from '../users/UserVM';
import { UserDetailVM } from './UserDetailVM';

export interface UserDetailsView {
    showUser(user: UserDetailVM): void;
}

export class UserDetailsPresenter {
    private view: UserDetailsView;

    constructor(view: UserDetailsView) {
        this.view = view;
    }

    start(user: UserVM) {
        this.view.showUser(this.userDetailFromUser(user));
    }

    private userDetailFromUser(user: UserVM): UserDetailVM {
        const { id, name, picture, street, city } = user;
        return { id, name, picture, street, city };
    }
}
