import axios from 'axios';
import { API_BASE_URL } from '../config/environment';
import { Task } from '../types/task';

const taskService = {
    getAllTasks: async (): Promise<Task[]> => {
        const response = await axios.get(`${API_BASE_URL}/tasks`);
        return response.data;
    },

    getTaskById: async (id: number): Promise<Task> => {
        const response = await axios.get(`${API_BASE_URL}/tasks/${id}`);
        return response.data;
    },

    createTask: async (task: Omit<Task, 'id'>): Promise<Task> => {
        const response = await axios.post(`${API_BASE_URL}/tasks`, task);
        return response.data;
    },

    updateTask: async (id: number, task: Task): Promise<Task> => {
        const response = await axios.put(`${API_BASE_URL}/tasks/${id}`, task);
        return response.data;
    },

    deleteTask: async (id: number): Promise<void> => {
        await axios.delete(`${API_BASE_URL}/tasks/${id}`);
    },
};

export default taskService;