import { HttpClient } from './infrastructure/http/HttpClient';
import { GetUsers } from './useCases/GetUsers';
import { HttpUsersFinder } from './infrastructure/http/HttpUsersFinder';
import { Environment } from './Environment';
import { UsersSorter } from './domain/UsersSorter';
import { InMemoryUserService } from './infrastructure/inMemory/InMemoryUserService';
import { FilterUsers } from './useCases/FilterUsers';

export class Provider {
    static getUsers() { return new GetUsers(D.usersFinder(), D.userSorter(), D.inMemoryUserService()); }
    static filterUsers() { return new FilterUsers(D.inMemoryUserService()); }
}

class Dependencies {
    static httpClient() { return new HttpClient(Environment.get('API_URL')); }
    static userSorter() { return new UsersSorter(); }
    static usersFinder() { return this.singleton('usersFinder', () => new HttpUsersFinder(this.httpClient())); }
    static inMemoryUserService() { return this.singleton('inMemoryUserService', () => new InMemoryUserService()); }

    static singleton<T>(name: string, build: () => T): T {
        if (!this._singleInstances[name]) { this._singleInstances[name] = build(); }
        return this._singleInstances[name];
    }

    static _singleInstances: any = {};
}

const D = Dependencies;
