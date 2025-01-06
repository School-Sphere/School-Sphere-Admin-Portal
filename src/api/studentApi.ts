import axios from 'axios';
import { Student } from '../models/studentModel';

// Base URL for the API
const BASE_URL = import.meta.env.VITE_BASE_URL;

// Create an Axios instance for API calls
const apiClient = axios.create({
  baseURL: BASE_URL,
});

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

export const fetchStudentById = async (studentId: string, token: string): Promise<Student> => {
  try {
    const response = await apiClient.get(`/student/${studentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const student = response.data.data;

    // Map API response to Student interface
    return {
      id: student._id,
      studentId: student.studentId,
      name: student.name,
      gender: student.gender,
      parentContact: student.parentContact,
      email: student.email,
      dob: student.dob,
      bloodGroup: student.bloodGroup || null,
      religion: student.religion || null,
      doa: student.doa,
      fatherName: student.fatherName || null,
      motherName: student.motherName || null,
      parentEmail: student.parentEmail || null,
      address: student.address || null,
      className: student.className || null,
      section: student.section || null,
      fatherOccupation: student.fatherOccupation || null,
      motherOccupation: student.motherOccupation || null,
      profilePicture: student.profilePicture || null,
    };
  } catch (error: any) {
    throw error.response?.data || { message: 'Failed to fetch student data' };
  }
};