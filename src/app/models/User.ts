export interface User{
    Id :number;
    FirstName: string;
    LastName:string;
    Email : string;
    PasswordHash: number; 
    PasswordSalt : number; 
    Status:boolean;

    CustomerId: number;
    UserId:number;
    CompanyName:string;
     User: User 
}