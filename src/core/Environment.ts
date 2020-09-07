import Config from 'react-native-config';

export class Environment {
    static get(name: string, defaultValue = ''): string {
        return Config[name] || defaultValue;
    }
}
