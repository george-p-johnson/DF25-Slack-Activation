import { createRouter, createWebHistory } from 'vue-router'
import Attract from '../views/Attract.vue'
import Page1 from '../views/Page1.vue'
import Page2 from '../views/Page2.vue'
import Mobile from '../views/Mobile.vue'
import Desktop from '../views/Desktop.vue'

import MobileVideo1 from '../views/MobileVideo1.vue'



const routes = [
    { path: '/', name: 'Attract', component: Attract },
    { path: '/page1', name: 'Page1', component: Page1 },
    { path: '/page2', name: 'Page2', component: Page2 },
    { path: '/mobile', name: 'Mobile', component: Mobile },
    { path: '/desktop', name: 'Desktop', component: Desktop },
    { path: '/mobileVideo1', name: 'MobileVideo1', component: MobileVideo1 },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
