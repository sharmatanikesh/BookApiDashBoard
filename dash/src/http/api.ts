import axios from "axios";

const api =axios.create({
    baseURL:'http://localhost:5000',
    headers:{
        'Content-Type':'application/json',

    },
})


export const login= async(data:{email:string,password:string})=>{
    return api.post('/api/v1/users/login',data)
}


export const register = async(data:{email:string,password:string,name:string})=>{
    return api.post('api/v1/users/register',data);
}

export const getBooks = async()=>api.get('api/v1/books');


export const createBook = async (data: FormData) =>
    api.post('/api/books', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });