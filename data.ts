export interface IUser{
    id:number,
    name:string,
    email:string,
    age:number
}


export const users : IUser[] = [
    {
        id : 1,
        name: "burak",
        email : "burakcive@gmail.com",
        age : 31
    },
    {
        id : 2,
        name: "yagmur",
        email : "yagmurozcancive@gmail.com",
        age : 28
    }
]