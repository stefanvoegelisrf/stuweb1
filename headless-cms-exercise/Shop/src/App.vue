<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Dock from 'primevue/dock';
const navigationLinks = [{
  to: "/",
  name: "Brands",
  icon: "/icons/factory.svg"
}
  ,
{
  to: "/shoes",
  name: "Shoes",
  icon: "/icons/sneaker.svg"
}];
</script>

<template>
  <header>
    <Dock :model="navigationLinks">
      <template #item="{ item }">
        <RouterLink :to="item.to">
          <img v-tooltip.top="item.name" :alt="item.name" :src="item.icon" class="dock-icon bg-white p-1 rounded-md invert h-12 w-full" />
        </RouterLink>
      </template>
    </Dock>
  </header>

  <RouterView />
</template>
