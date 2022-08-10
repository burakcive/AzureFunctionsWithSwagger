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
        email : "burakcive@outlook.com",
        age : 31
    },
    {
        id : 2,
        name: "person",
        email : "someperson@gmail.com",
        age : 28
    }
]