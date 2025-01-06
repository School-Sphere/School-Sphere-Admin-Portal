export interface Student {
    id: string;
    studentId: string;
    name: string;
    className: string | null;
    section: string | null;
    gender: string;
    parentContact: string;
    email: string;
    dob: string; // Assuming this is an ISO date string
    bloodGroup: string | null;
    religion: string | null;
    doa: string; // Date of Admission (assuming ISO date string)
    fatherName: string | null;
    motherName: string | null;
    parentEmail: string | null;
    address: string | null;
    fatherOccupation: string | null;
    motherOccupation: string | null;
    profilePicture: string | null;
}