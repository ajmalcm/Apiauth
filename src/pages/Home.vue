<script setup>
import { watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import {useAppStore} from "../stores/app.js";
const store=useAppStore();
const router=useRouter();
  
    onMounted(()=>{
        const token=JSON.parse(localStorage.getItem("token"));
        store.loadUser(token)
    })

    watchEffect(()=>{
        if(!store.isAuthenticated)
        router.push("/login")
    })
  
</script>

<template>
    <div class="container">
        <h2>HOME PAGE</h2>
        <UserProfile class="pad"/>
        <v-btn class="btn-primary mx-auto" @click="store.logout" >LOGOUT</v-btn>
    </div>
   </template>

   <style scoped>
    .container{
        display:flex;
        flex-direction: column;
        align-items: center;
        gap:20px;
    }
    .pad{
        padding:20px 40px;
    }
    /* .btn-primary{
        margin-top: 20px;
    } */
</style>
