import React, { useEffect } from 'react';
import { useTasksRequests } from './api/useRequestsHooks/useTasksRequests';

const App = () => {
    const { getTasks } = useTasksRequests();

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <div className="app">
            APPLICATION
        </div>
    );

};

export default App;
