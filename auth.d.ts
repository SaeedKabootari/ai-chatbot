import NextAuth from "next-auth";


type UserRole = 'admin' | 'user';

declare module 'next-auth'{
    interface User {
        promptBalance?:number;
        role?:UserRole
    }
    interface Session{
        user: User
    }
}