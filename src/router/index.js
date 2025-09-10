import { createRouter, createWebHistory } from 'vue-router'
import Attract from '../views/Attract.vue'
import Instructions from '../views/Instructions.vue'
import Selection from '../views/Selection.vue'
import Mobile from '../views/Mobile.vue'
import Desktop from '../views/Desktop.vue'

import MobileVideo1 from '../views/MobileVideo1.vue'
import MobileVideo2 from '../views/MobileVideo2.vue'
import MobileVideo3 from '../views/MobileVideo3.vue'
import MobileVideo4 from '../views/MobileVideo4.vue'

import DesktopVideo1 from '../views/DesktopVideo1.vue'
import DesktopVideo2 from '../views/DesktopVideo2.vue'
import DesktopVideo3 from '../views/DesktopVideo3.vue'
import DesktopVideo4 from '../views/DesktopVideo4.vue'



const routes = [
    { path: '/', name: 'Attract', component: Attract },
    { path: '/instructions', name: 'Instructions', component: Instructions },
    { path: '/selection', name: 'Selection', component: Selection },
    { path: '/mobile', name: 'Mobile', component: Mobile },
    { path: '/desktop', name: 'Desktop', component: Desktop },
    { path: '/mobileVideo1', name: 'MobileVideo1', component: MobileVideo1 },
    { path: '/mobileVideo2', name: 'MobileVideo2', component: MobileVideo2 },
    { path: '/mobileVideo3', name: 'MobileVideo3', component: MobileVideo3 },
    { path: '/mobileVideo4', name: 'MobileVideo4', component: MobileVideo4 },
    { path: '/desktopVideo1', name: 'DesktopVideo1', component: DesktopVideo1 },
    { path: '/desktopVideo2', name: 'DesktopVideo2', component: DesktopVideo1 },
    { path: '/desktopVideo3', name: 'DesktopVideo3', component: DesktopVideo1 },
    { path: '/desktopVideo4', name: 'DesktopVideo4', component: DesktopVideo1 },


]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
