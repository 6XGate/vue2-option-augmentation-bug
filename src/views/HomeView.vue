<script lang="ts">
import TheWelcome from '@/components/TheWelcome.vue'
import { defineComponent } from 'vue';

const HomeView = defineComponent({
  name: 'HomeView',
  components: { TheWelcome },
  funcOption: route => String(route)
})

export default HomeView
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
