import axios, { AxiosInstance } from 'axios';

export class HttpClient {
    private http: AxiosInstance;

    constructor(serverBaseUrl: string) {
        this.http = axios.create({
            baseURL: serverBaseUrl,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async get(url: string): Promise<any> {
        try {
            return await this.http.get(url);
        } catch (e) {
            return setTimeout(this.get(url), 500);
        }
    }

    async post(url: string, jsonBody: object = {}): Promise<any> {
        return await this.http.post(url, JSON.stringify(jsonBody));
    }
}
