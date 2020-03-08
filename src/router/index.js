import Vue from "vue"
import VueRouter from "vue-router"
import Demo from "@/views/test/Demo"
import Ebook from "@/views/ebook"

Vue.use(VueRouter)

const routes = [
  { path: '/demo', component: Demo },
  { path: '/ebook', component: Ebook }
]

const router = new VueRouter({ routes })

export default router
