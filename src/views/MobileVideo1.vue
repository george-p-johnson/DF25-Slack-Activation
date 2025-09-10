<template>
    <div class="page-content">
    <Transition name="fade">
            <div v-if="true" class="fade-group">
                <h2>Mobile video1</h2>

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
        </Transition>
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
