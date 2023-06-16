import { useState } from 'react';
import axios from 'axios';
import { Endpoints } from '../endoints';
import { TTask } from '../../types/tasks.types';

export const useTasksRequests = () => {
    const [ tasks, setTasks ] = useState<Array<TTask>>([]);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ isError, setIsError ] = useState<boolean>(false);

    const getTasks = async () => {
        try {
            setIsLoading(true);

            const response = await axios.get(Endpoints.tasks);

            setIsLoading(false);

            if (response.data.length) {
                setTasks(response.data);
            } else {
                console.log('useTasksRequests => getTasks => response.data is empty: ', response.data);
            }
        } catch(error) {
            if (axios.isAxiosError(error)) {
                setIsError(true);
                setIsLoading(false);
            }
        }
    };

    return { getTasks, tasks, isLoading, isError };
};