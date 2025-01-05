export interface AuthResponse {
    success: boolean;
    message: string;
    token?: string;
    data?: {
      _id: string;
      name: string;
      address: string;
      email: string;
      schoolCode: string;
      password: string;
      __v: number;
    };
  }
  