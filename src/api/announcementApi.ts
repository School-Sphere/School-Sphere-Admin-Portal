import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const apiClient = axios.create({
    baseURL: BASE_URL,
});

export const createAnnouncement = async (announcementData: {
    title: string;
    description: string;
    targetAudience: string;
}) => {
    try {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        if (!token) {
            throw new Error('Authentication token is missing');
        }
        const response = await apiClient.post('/announcement', announcementData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error: any) {
        throw error.response?.data || { message: 'An unknown error occurred' };
    }
};

export const fetchAnnouncements = async (page: number, limit: number = 10) => {
    try {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        if (!token) {
            throw new Error('Authentication token is missing');
        }
        const response = await apiClient.get(`/get-all-announcements?page=${page}&limit=${limit}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error: any) {
        throw error.response?.data || { message: 'An unknown error occurred' };
    }
};