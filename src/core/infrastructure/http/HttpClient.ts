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
        return await this.http.get(url);
    }

    async post(url: string, jsonBody: object = {}): Promise<any> {
        return await this.http.post(url, JSON.stringify(jsonBody));
    }
}
