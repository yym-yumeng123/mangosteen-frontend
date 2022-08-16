import { RouteRecordRaw } from "vue-router"
import { Welcome } from "../views/Welcome"
import { WelcomeFirst } from "../components/welcome/First"
import { WelcomeSecond } from "../components/welcome/Second"
import { WelcomeThird } from "../components/welcome/Third"
import { WelcomeForth } from "../components/welcome/Forth"

const routes: RouteRecordRaw[] = [
  {
    path: "/welcome",
    component: Welcome,
    children: [
      { path: "one", component: WelcomeFirst },
      { path: "two", component: WelcomeSecond },
      { path: "three", component: WelcomeThird },
      { path: "four", component: WelcomeForth },
    ],
  },
]

export default routes
