import { RouteRecordRaw } from "vue-router"
import { Welcome } from "../views/Welcome"
import { WelcomeFirst } from "../components/welcome/first"
import { WelcomeForth } from "../components/welcome/forth"
import { WelcomeSecond } from "../components/welcome/second"
import { WelcomeThird } from "../components/welcome/third"

const routes: RouteRecordRaw[] = [
  {
    path: "/welecome",
    component: Welcome,
    children: [
      { path: "/one", component: WelcomeFirst },
      { path: "/two", component: WelcomeSecond },
      { path: "/three", component: WelcomeThird },
      { path: "/four", component: WelcomeForth },
    ],
  },
]

export default routes
