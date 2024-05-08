import { axiosInstance } from "./ApiInstances";
const SignupApi=async(payload)=>{
    console.log(payload);
    const data=await axiosInstance.post('/user',payload);
    console.log(data);
}

export {SignupApi};