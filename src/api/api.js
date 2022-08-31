import * as axios from "axios";

const instanse = axios.create({
    
            withCredentials: true,
            baseURL:"https://social-network.samuraijs.com/api/1.0/",
             headers: {
                "API-KEY": "6d1b1ad3-6bc1-46eb-a308-20ec3cb9e155",
            }
});

export const getUsers=(currentPage,pageSize)=>{
   return(
    instanse.get(`users?page=${currentPage}&count=${pageSize}`).then(response=>{
           return response.data 
        })
   ); 
}
 export const unfollow=(u)=>{
    return(
        instanse.delete(`follow/${u.id}`).then(response=>{
            return response.data 
         })
    ); 
 }
export const follow=(u)=>{
    return(
        instanse.post(`follow/${u.id}`).then(response=>{
            return response.data 
         })
    ); 
 }

