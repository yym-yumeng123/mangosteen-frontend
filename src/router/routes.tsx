import { RouteRecordRaw } from "vue-router"
import { First } from "../components/welcome/First"
import { FirstActions } from "../components/welcome/FirstActions"
import { Forth } from "../components/welcome/Forth"
import { ForthActions } from "../components/welcome/ForthActions"
import { Second } from "../components/welcome/Second"
import { SecondActions } from "../components/welcome/SecondActions"
import { Third } from "../components/welcome/Third"
import { ThirdActions } from "../components/welcome/ThirdActions"
import { Welcome } from "../views/Welcome"
import { StartPage } from "../views/StartPage"

export const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/welcome" },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      { path: "", redirect: "/welcome/one" },
      { path: "one", components: { main: First, footer: FirstActions } },
      { path: "two", components: { main: Second, footer: SecondActions } },
      { path: "three", components: { main: Third, footer: ThirdActions } },
      { path: "four", components: { main: Forth, footer: ForthActions } },
    ],
  },
  {
    path: '/start',
    component: StartPage
  }
]
