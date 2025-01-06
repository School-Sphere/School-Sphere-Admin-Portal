import axios from 'axios';

// Base URL for the API
const BASE_URL = import.meta.env.VITE_BASE_URL;

// Create an Axios instance for API calls
const apiClient = axios.create({
  baseURL: BASE_URL,
});

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

export const fetchTeacherById = async (teacherId: string, token: string) => {
    try {
      const response = await axios.get(`${BASE_URL}/teacher/${teacherId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data; // Assuming the API response structure is { success: true, data: teacher }
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch teacher data');
    }
};