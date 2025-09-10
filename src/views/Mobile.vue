<template>
    <div class="page-content">
        <Transition name="fade">
            <div v-if="true" class="fade-group">
                <h2>Mobile video plays</h2>
                <button @click="mobileVideo1">mobileVideo1</button>
                <button @click="mobileVideo2">mobileVideo2</button>
                <button @click="mobileVideo3">mobileVideo3</button>
                <button @click="mobileVideo4">mobileVideo4</button>
            </div>
        </Transition>
    </div>
</template>


<script setup>
import { useRouter } from 'vue-router'
import { logClick } from '@/utils/logger.js'

const router = useRouter()

function mobileVideo1() {
    logClick('Mobile video 1', 'Mobile')
    router.push('/mobileVideo1') 
}

function mobileVideo2() {
    logClick('Mobile video 2', 'Mobile')
    router.push('/mobileVideo2') 
}

function mobileVideo3() {
    logClick('Mobile video 3', 'Mobile')
    router.push('/mobileVideo3') 
}

function mobileVideo4() {
    logClick('Mobile video 4', 'Mobile')
    router.push('/mobileVideo4') 
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
