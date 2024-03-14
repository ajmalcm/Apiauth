<script setup>
import {useAppStore} from "../stores/app.js";
const store=useAppStore();
</script>

<template>
    <v-card
      class="mx-auto"
      max-width="434"
      rounded="0"
      style="display: flex; flex-direction: column; align-items: center; justify-content: center;"
    >
        <v-avatar
          color="grey"
          rounded="100"
          size="150"
          
        >
          <v-img :src="store.user.image"  cover></v-img>
        </v-avatar>
        <v-list-item
          class="text-black"
          :subtitle="store.user.firstName"
          :title="store.user.lastName"
        ></v-list-item>

        <v-list>
          <v-list-item>
            <strong>id:</strong>{{ store.user.id }}
          </v-list-item>
          <v-list-item>
           <strong>userName:</strong>{{ store.user.username }}
          </v-list-item>
          <v-list-item>
           <strong>email:</strong>{{ store.user.email }}
          </v-list-item>
          <v-list-item>
            <strong>gender:</strong>{{ store.user.gender }}
          </v-list-item>
        </v-list>
    </v-card>
  </template>

