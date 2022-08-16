import { createRouter, createWebHistory } from "vue-router"

import Foo from "../views/Foo"
import Bar from "../views/Bar"

const routes = [
  { path: "/", component: Foo },
  { path: "/bar", component: Bar },
]



export default routes
