<template>
  <div class="page-content">
    <!-- Text fade -->
    <Transition name="fade">
      <div v-if="true" class="fade-group">
        <h1>Attract video</h1>
        <button @click="goNext">Start</button>
      </div>
    </Transition>
  </div>
</template>



<script setup>
import { useRouter } from 'vue-router'
// import { logClick } from '@/utils/logger.js'
import { startSession, logClick, endSession } from '@/utils/logger.js'


const router = useRouter()
function goNext() {
    startSession()

    logClick('Start Button Clicked', 'Attract')
    router.push('/instructions')
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
    font-family: "AvantGardeForSalesforce-Demi", sans-serif;

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
