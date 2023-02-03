import { createApp } from "vue"
import { createRouter } from "vue-router"
import App from "./App"
import { routes } from "./router/routes"
import { history } from "./shared/history"
import "@svgstore"
import { fetchMe, mePromise } from "./shared/me"
const router = createRouter({ history, routes })

fetchMe()

router.beforeEach((to, from) => {
  if (
    ["/", "/items"].includes(to.path) ||
    to.path.startsWith("/welcome") ||
    to.path.startsWith("/sign_in")
  ) {
    return true
  } else {
    return mePromise!.then(
      () => true,
      () => "/sign_in?return_to=" + to.path
    )
  }
})

const app = createApp(App)
app.use(router)
app.mount("#app")
