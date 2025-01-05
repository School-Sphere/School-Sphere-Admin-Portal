import axios from 'axios';

// Base URL for the API
const BASE_URL = import.meta.env.VITE_BASE_URL;

// Create an Axios instance for API calls
const apiClient = axios.create({
  baseURL: BASE_URL,
});

// Fetch classes with pagination
export const fetchClasses = async (page: number, token: string) => {
  try {
    const response = await apiClient.get(`/classes?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: 'An unknown error occurred' };
  }
};

// Fetch students with pagination
export const fetchStudents = async (page: number, token: string) => {
  try {
    const response = await apiClient.get(`/students?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: 'An unknown error occurred' };
  }
};

//Fetch teachers with pagination
export const fetchTeachers = async (page: number, token: string) => {
  try {
    const response = await apiClient.get(`/teachers?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: 'An unknown error occurred' };
  }
};
