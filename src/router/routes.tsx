import { RouteRecordRaw } from "vue-router"
import { First } from "../components/welcome/First"
import { FirstActions } from "../components/welcome/FirstActions"
import { Forth } from "../components/welcome/Forth"
import { ForthActions } from "../components/welcome/ForthActions"
import { Second } from "../components/welcome/Second"
import { SecondActions } from "../components/welcome/SecondActions"
import { Third } from "../components/welcome/Third"
import { ThirdActions } from "../components/welcome/ThirdActions"

import { WelcomePage } from "../views/WelcomePage/WelcomePage"
import { ItemPage } from "../views/ItemPage/ItemPage"
import { ItemList } from "../components/item/ItemList"
import { ItemCreate } from "../components/item/ItemCreate"
import { TagPage } from "../views/TagPage/TagPage"
import { TagEdit } from "../components/tag/TagEdit"
import { TagCreate } from "../components/tag/TagCreate"
import { SignInPage } from "../views/SignInPage/SignInPage"
import { StatisticsPage } from "../views/StatisticsPage/StatisticsPage"
import { ComingSoon } from "../shared/ComingSoon/ComingSoon"

export const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/welcome" },
  {
    path: "/welcome",
    component: () => import("../views/WelcomePage/WelcomePage"),
    beforeEnter: (to, from, next) => {
      localStorage.getItem("skipFeatures") === "yes" ? next("/items") : next()
    },
    children: [
      { path: "", redirect: "/welcome/one" },
      {
        path: "one",
        name: "welcomeOne",
        components: { main: First, footer: FirstActions },
      },
      {
        path: "two",
        name: "welcomeTwo",
        components: { main: Second, footer: SecondActions },
      },
      {
        path: "three",
        name: "welcomeThree",
        components: { main: Third, footer: ThirdActions },
      },
      {
        path: "four",
        name: "welcomeFour",
        components: { main: Forth, footer: ForthActions },
      },
    ],
  },
  // {
  //   path: "/start",
  //   component: StartPage,
  // },
  {
    path: "/items",
    component: () => import("../views/ItemPage/ItemPage"),
    children: [
      {
        path: "",
        component: ItemList,
      },
      {
        path: "create",
        component: ItemCreate,
      },
    ],
  },
  {
    path: "/tags",
    component: () => import("../views/TagPage/TagPage"),
    children: [
      {
        path: "create",
        component: TagCreate,
      },
      {
        path: ":id/edit",
        component: TagEdit,
      },
    ],
  },
  {
    path: "/sign_in",
    component: () => import("../views/SignInPage/SignInPage"),
  },
  {
    path: "/statistics",
    component: () => import("../views/StatisticsPage/StatisticsPage"),
  },
  {
    path: "/export",
    component: () => import("../shared/ComingSoon/ComingSoon"),
  },
  {
    path: "/notify",
    component: () => import("../shared/ComingSoon/ComingSoon"),
  },
]
