import { HttpClient } from './HttpClient';
import { UsersFinder } from '../../domain/UsersFinder';
import { User } from '../../domain/User';
import { Location } from '../../domain/Location';

export class HttpUsersFinder implements UsersFinder {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    async get(): Promise<User[]> {
        const response = await this.httpClient.get('?results=100&seed=jorch&inc=login,name,picture,location,phone');
        return response.data.results.map(this.userFromJson.bind(this));
    }

    private userFromJson(json: any): User {
        const { login: { uuid }, name: { first, last }, phone, picture: { large }, location } = json;
        return {
            id: uuid,
            firstname: first,
            lastName: last,
            phone,
            picture: large,
            location: this.locationFromJson(location),
        };
    }

    private locationFromJson = (location: any): Location => {
        const { street: { number, name }, city } = location;
        return { street: `${name} ${number}`, city };
    };
}
