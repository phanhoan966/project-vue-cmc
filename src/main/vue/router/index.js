import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../page/Login.vue'
import AddUser from '../page/AddUser.vue'
import EditUser from '../page/EditUser.vue'
import DeleteUser from '../page/DeleteUser.vue'
import ListUser from '../page/ListUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/user/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/user/add-user',
    name: 'AddUser',
    component: AddUser
  },
  {
    path: '/user/edit-user',
    name: 'EditUser',
    component: EditUser
  },
  {
    path: '/user/delete-user',
    name: 'DeleteUser',
    component: DeleteUser
  },
  {
    path: '/user/list-user',
    name: 'ListUser',
    component: ListUser
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
