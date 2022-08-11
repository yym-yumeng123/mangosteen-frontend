import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import "./style.css"
import App from "./App"
import Foo from "./views/Foo"
import Bar from "./views/Bar"
const routes = [
  { path: "/", component: Foo },
  { path: "/bar", component: Bar },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount("#app")
