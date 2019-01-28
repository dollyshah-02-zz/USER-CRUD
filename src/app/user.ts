export class User {
    id:number;
    first_name:string;
    last_name:string;
    avatar:string;
}

export interface UserInterface {
    page: number,
    per_page:number,
    total:number,
    total_pages:number,
    data: User[]
}

export interface EditUser{
    data: User
}