export class User {
    name: string;
    email: string;
    phoneNumber: number;
    address: string;
    gender: string;
    dob: string;
    username: string;
    password: string;

    constructor(obj: any) {
        this.name = obj.name || '';
        this.email = obj.email || '';
        this.phoneNumber = obj.phoneNumber || 0;
        this.address = obj.address || '';
        this.gender = obj.gender || '';
        this.dob = obj.dob || '';
        this.username = obj.username || '';
        this.password = obj.password || '';
    }
}