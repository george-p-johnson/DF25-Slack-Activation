<template>
  <div class="page-content">
    <h2>Mobile video plays</h2>
    <button @click="desktopVideo1">desktopVideo1</button>
    <button @click="desktopVideo2">desktopVideo2</button>
    <button @click="desktopVideo3">desktopVideo3</button>
    <button @click="desktopVideo4">desktopVideo4</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { logClick } from '@/utils/logger.js'

const router = useRouter()

function desktopVideo1() {
    logClick('Desktop video 1', 'Desktop')
    router.push('/desktopVideo1') 
}

function desktopVideo2() {
    logClick('Desktop video 2', 'Desktop')
    router.push('/desktopVideo2') 
}

function desktopVideo3() {
    logClick('Desktop video 3', 'Desktop')
    router.push('/desktopVideo3') 
}

function desktopVideo4() {
    logClick('Desktop video 4', 'Desktop')
    router.push('/desktopVideo4') 
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
