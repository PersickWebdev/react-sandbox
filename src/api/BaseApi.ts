import axios from 'axios';
import { AxiosInstance } from 'axios';

abstract class BaseApi {
    protected http: AxiosInstance;

    constructor() {
        this.http = axios.create({
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
}

export { BaseApi };