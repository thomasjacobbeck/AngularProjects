export class User {
    Id: number;
    UserName: string;
    Password: string;
    FirstName: string;
    LastName: string;
    Phone: string;
    Email: string;
    isReviewer: boolean;
    isAdmin: boolean;
    
    constructor() {
        this.Id = 0;
        this.isReviewer = false;
        this.isAdmin = false;
    }
}