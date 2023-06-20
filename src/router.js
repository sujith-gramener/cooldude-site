import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage'
import PlacesPage from './pages/PlacesPage'
// there is also createWebHashHistory and createMemoryHistory
// https://router.vuejs.org/guide/migration/

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: "/",component: HomePage},
    {path: "/places",component: PlacesPage},
  ],
})

export default router;