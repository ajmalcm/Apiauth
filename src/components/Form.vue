<script setup>
import { ref } from 'vue';
import {useAppStore} from "../stores/app.js"
const store=useAppStore();
const userNameRules=[
    value=>
    {
        if(value) 
        return true
        return "Please provide userName"
    }
]

const passwordRules=[
    value=>{
        if(value) 
        return true
        return "Please provide password"
    }
]

const formData=ref({name:"",password:""})

</script>

<template>
<v-sheet width="500" class="mx-auto"  rounded>
   
        <p>LOGIN FORM</p>
        <v-form fast-fail @submit.prevent="store.userLogin(formData)">
            <v-text-field  v-model="formData.name" label="Enter Username" :rules="userNameRules" required clearable>
            </v-text-field>
            <v-text-field  v-model="formData.password" label="Enter Password" :rules="passwordRules" type="password" required clearable>
            </v-text-field>
            <v-btn type="submit" text="LOGIN" block></v-btn>
        </v-form>     
     
</v-sheet>
</template>

<style scoped>
</style>