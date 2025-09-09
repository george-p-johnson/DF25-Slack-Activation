<template>
  <div class="page-content">
    <h1>Attract video</h1>
    <button @click="goNext">Start</button>
  </div>
</template>

<script setup>
// import { useRouter } from 'vue-router'
// const router = useRouter()
// function goNext() {
//   router.push('/page1')
// }

import { useRouter } from 'vue-router'
import { logClick } from '@/utils/logger.js'

const router = useRouter()
function goNext() {
  logClick('Start Button Clicked', 'Attract')
  router.push('/page1')
}

</script>

<style scoped>
.page-content {
  position: relative;   /* keeps it above video */
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
  text-align: center;
}

h1 {
    font-size: 200px;
}

button {
    margin-top: 2rem;
    padding: 29px 200px;
    font-size: 70px;
    cursor: pointer;
    border-radius: 70px;
    border: none;
}
</style>
