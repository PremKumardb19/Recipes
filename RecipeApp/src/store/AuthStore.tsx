import {create} from "zustand"

interface AuthType{
    name:string,
    setName:(name:string)=>void,
    email:string,
    setEmail:(email:string)=>void,
    password:string,
    setPassword:(password:string)=>void,
    isLogged:boolean,
    setIsLogged:(status:boolean)=>void,
    showModal:boolean,
    setShowModal:(show:boolean)=>void
}


export const useAuthStore=create<AuthType>((set)=>({
        name:"",
        setName:(updatedName:string)=>set({name:updatedName}),
        email:"",
        setEmail:(updatedEmail:string)=>set({email:updatedEmail}),
        password:"",
        setPassword:(updatedPassword:string)=>set({password:updatedPassword}),
        isLogged:false,
        setIsLogged:(status:boolean)=>set({isLogged:status}),
        showModal:false,
        setShowModal:(show:boolean)=>set({showModal:show})
   
}))

