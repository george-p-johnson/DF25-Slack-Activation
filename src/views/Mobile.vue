<template>
  <div class="page-content">
    <h2>Mobile video plays</h2>
    <button @click="mobileVideo1">mobileVideo1</button>
    <button @click="mobileVideo2">mobileVideo2</button>
    <button @click="mobileVideo3">mobileVideo3</button>
    <button @click="mobileVideo4">mobileVideo4</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function mobileVideo1() {
  router.push('/mobileVideo1') 
}

function mobileVideo2() {
  router.push('/') // loops back to attract
}

function mobileVideo3() {
  router.push('/') // loops back to attract
}

function mobileVideo4() {
  router.push('/') // loops back to attract
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

button {
    margin-top: 2rem;
    padding: 29px 200px;
    font-size: 70px;
    cursor: pointer;
    border-radius: 70px;
    border: none;
}
</style>
