import { UserVM } from './UserVM';
import { GetUsers } from '../../../core/useCases/GetUsers';
import { User } from '../../../core/domain/User';
import { FilterUsers } from '../../../core/useCases/FilterUsers';

export interface UsersView {
    showLoading(): void;
    hideLoading(): void;
    initializePagination(totalUsers: number, limit: number): void;
    showUsers(users: UserVM[]): void;
    changePage(page: number): void;
    updateSearch(text: string): void;
    navigateToUserDetail(user: UserVM): void;
}

export class UsersPresenter {
    private view: UsersView;
    private getUsers: GetUsers;
    private filterUsers: FilterUsers;
    private usersVM: UserVM[] = [];
    private limit = 15;

    constructor(view: UsersView, getUsers: GetUsers, filterUsers: FilterUsers) {
        this.view = view;
        this.getUsers = getUsers;
        this.filterUsers = filterUsers;
    }

    async start() {
        this.view.showLoading();
        this.updateView(await this.getUsers.execute());
        this.view.hideLoading();
    }

    private updateView(users: User[]) {
        this.updateUsersVM(users);
        this.initializePagination();
        this.changePage(1);
    }

    private updateUsersVM(users: User[]) {
        this.usersVM = users.map((user: User) => this.userToViewModel(user));
    }

    private userToViewModel = (user: User): UserVM => {
        const { id, firstname, lastName, phone, picture, location: { street, city } } = user;
        return { id, name: `${lastName}, ${firstname}`, phone, picture, street, city };
    };

    private initializePagination() {
        this.view.initializePagination(this.usersVM.length, this.limit);
    }

    changePage(page: number) {
        const currentPageUsers = this.usersVM.slice((page - 1) * this.limit, this.limit * page);
        this.view.showUsers(currentPageUsers);
        this.view.changePage(page);
    }

    selectUser(user: UserVM) {
        this.view.navigateToUserDetail(user);
    }

    searchUser(text: string) {
        this.view.updateSearch(text);
        this.updateView(this.filterUsers.execute(text));
    }
}
