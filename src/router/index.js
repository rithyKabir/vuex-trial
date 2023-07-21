import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import CounterPinia from '../components/PiniaComponent/CounterPinia.vue';
import VueXEmployeeList from '../components/VueX Optional API//VueXEmployee.vue';
import UserList from '../components/PiniaComponent/UserListPinia.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/counter',
    name: 'Counter',
    component: CounterPinia
  },
  {
    path: '/employees',
    name: 'EmployeeList',
    component: VueXEmployeeList
  },
  {
    path: '/users',
    name: 'UserList',
    component: UserList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
