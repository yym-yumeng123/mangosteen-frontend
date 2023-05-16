import { createApp } from "vue"
import { createPinia } from "pinia"
import { createRouter } from "vue-router"
import App from "./App"
import { routes } from "./router/routes"
import { history } from "./shared/history"
import "@svgstore"
import { useMeStore } from "./stores/useMeStore"
const router = createRouter({ history, routes })

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount("#app")

const meStore = useMeStore()
meStore.fetchMe()

router.beforeEach((to, from) => {
  if (
    ["/", "/items"].includes(to.path) ||
    to.path.startsWith("/welcome") ||
    to.path.startsWith("/sign_in")
  ) {
    return true
  } else {
    return meStore.mePromise!.then(
      () => true,
      () => "/sign_in?return_to=" + to.path
    )
  }
})
