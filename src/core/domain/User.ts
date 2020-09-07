import { Location } from './Location';

export interface User {
    id: string;
    firstname: string;
    lastName: string;
    phone: string;
    picture: string;
    location: Location;
}
