<template>
  <div class="page-content">
    <h2>Select something!</h2>
    <button @click="goMobile">Mobile</button>
    <button @click="goDesktop">Desktop</button>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goMobile() {
  router.push('/mobile') 
}

function goDesktop() {
  router.push('/desktop') 
}
</script>

<style scoped>
.page-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  color: white;
  z-index: 0;
}

h2 {
    font-size: 200px;
}

h4 {
    font-size: 150px;
    padding: 50px 200px;
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
