<template>
    <div class="page-content">
        <Transition name="fade">
            <div v-if="true" class="fade-group">
                <h2>Mobile video plays</h2>
                <button @click="desktopVideo1">desktopVideo1</button>
                <button @click="desktopVideo2">desktopVideo2</button>
                <button @click="desktopVideo3">desktopVideo3</button>
                <button @click="desktopVideo4">desktopVideo4</button>
            </div>
        </Transition>
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

/* Transition classes */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
