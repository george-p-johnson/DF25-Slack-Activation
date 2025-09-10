<template>
  <div class="page-content">
    <h2>Choose your own Adventure</h2>

    <h4>Slack is the entry point and hub that connects every team

    Pick a route and see how Slack + Agentforce power the Agentic Enterprise</h4>
    <button @click="goNext">Next</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { logClick } from '@/utils/logger.js'

const router = useRouter()

function goNext() {
  logClick('Next Button Clicked', 'Instructions')
  router.push('/selection')
}

// function goNext() {
//   router.push('/selection')
// }
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
