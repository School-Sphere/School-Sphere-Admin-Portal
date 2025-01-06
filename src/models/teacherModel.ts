export interface Teacher {
    id: string;
    teacherId: string;
    name: string;
    className: string | null;
    section: string | null;
    gender: string;
    contactNumber: string;
    email: string;
    designation: string;
    qualifications: string;
    address: string;
    dob: string;
    bloodGroup: string;
    religion: string;
    doj: string; // Date of Joining
    profilePicture: string | null;
}  