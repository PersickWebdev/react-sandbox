import { TEndpoints } from './types';

export const BASE_REQUEST_URL: string = 'http://localhost:3001';

export const Endpoints: TEndpoints = {
    tasks: `${BASE_REQUEST_URL}/tasks`,
    priorities: `${BASE_REQUEST_URL}/priorities`,
    statuses: `${BASE_REQUEST_URL}/statuses`,
}