<template>
  <div class="page-content">
    <h2>Desktop video2</h2>

    <video
      ref="videoEl"
      autoplay
      muted
      playsinline
      @ended="handleEnded"
    >
      <source src="/videos/mobileVideo1.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const videoEl = ref(null)

const handleEnded = () => {
  router.push('/') // go back to root after video ends
}

onMounted(() => {
  // Ensure autoplay works — some browsers need this kick
  if (videoEl.value) {
    videoEl.value.play().catch(err => {
      console.warn('Autoplay blocked:', err)
    })
  }
})
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

.bg-video {
  max-width: 100%;
  height: auto;
}
</style>
