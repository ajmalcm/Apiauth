<script setup>
import {onMounted, watchEffect} from "vue"
import {useRouter} from "vue-router";
import {useAppStore} from "../stores/app.js";
const store=useAppStore();
const router=useRouter();   

watchEffect(()=>{
    if(store.isAuthenticated)
    router.push("/home")
})
</script>

<template>
<Form/>
</template>

<style scoped>
.custom{
    width:100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>