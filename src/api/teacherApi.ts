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
    return response.data.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch teacher data');
  }
};

export const createTeacher = async (teacherData: any, token: string) => {
  console.log(teacherData);
  try {
    const response = await apiClient.post('/add-teacher', teacherData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    });
    console.log(response.data);
    return response.data;
  }
  catch (error: any) {
    throw error.response?.data || { message: 'An unknown error occurred' };
  }
};