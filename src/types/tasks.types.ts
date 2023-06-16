export type TTask = {
    id: number;
    title: string;
    description: string;
    priority: TPriority;
    status: TStatus;
}

export type TPriority = 'low' | 'medium' | 'high';

export type TStatus = 'pending' | 'in progress' | 'completed';