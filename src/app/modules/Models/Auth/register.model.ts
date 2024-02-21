export interface Register {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
    role: string;
    paisId: number | null;
    company: string;
    agreements: boolean;
    isSuperUser?: boolean;
}