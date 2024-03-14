// Utilities
import { defineStore } from 'pinia'
import {ref} from "vue";
import axios from "axios"
export const useAppStore = defineStore('auth', ()=>{
  const user=ref("");
  const isAuthenticated=ref(false);

  //userLogin
  const userLogin = async (userData) => {
    try {
      const { data } = await axios.post(
        'https://dummyjson.com/auth/login',
        {
          username:userData.name,
          password:userData.password
        },
        { headers: { 'Content-Type': 'application/json' } }
      );
      console.log(data); 
      user.value=data;
      console.log(user.value.token)
      isAuthenticated.value=true
      localStorage.setItem('token', JSON.stringify(user.value.token));
    } catch (err) {
      console.log(err.message);
    }
  };

  //userLogOut
  const logout=()=>{
    localStorage.setItem("token",null)
    isAuthenticated.value=false
   }

   //if not logged-out LoadLoogedInUserDetails 
   const loadUser=async(token)=>{
    try{
      const {data}=await axios.get('https://dummyjson.com/auth/me',{
        headers:{
          'Authorization': token
        }
      })

      user.value=data;
      isAuthenticated.value=true

    }
    catch(err)
    {
      console.log(err.message)
    }
   }

return {user,userLogin,logout,isAuthenticated,loadUser};

})
