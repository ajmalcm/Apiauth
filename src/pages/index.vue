<template>
 <!-- <AppBar/> -->
 default page

 <Home/>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router=useRouter();
onMounted(()=>router.push("/home"))
</script>
