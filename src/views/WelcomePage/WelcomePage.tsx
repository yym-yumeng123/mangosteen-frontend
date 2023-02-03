import { defineComponent, ref, Transition, VNode, watchEffect } from "vue"
import {
  RouteLocationNormalizedLoaded,
  RouterView,
  useRoute,
  useRouter,
} from "vue-router"
import { useSwipe } from "../../hooks/useSwipe"
import { throttle } from "../../shared/throttle"
import s from "./WelcomePage.module.scss"

const pushMap: Record<string, string> = {
  welcomeOne: "/welcome/two",
  welcomeTwo: "/welcome/three",
  welcomeThree: "/welcome/four",
  welcomeFour: "/items",
}

export const WelcomePage = defineComponent({
  setup: (props, context) => {
    const router = useRouter()
    const route = useRoute()
    const refMain = ref<HTMLElement | null>(null)
    const { swiping, direction } = useSwipe(refMain, {
      beforeStart: (e) => e.preventDefault(),
    })

    const push = throttle(() => {
      const name = (route.name || "welcomeOne").toString()
      router.push(pushMap[name])
    }, 500)

    watchEffect(() => {
      if (swiping.value && direction.value === "left") {
        push()
      }
    })

    return () => (
      <div class={s.wrapper}>
        <header>
          <svg>
            <use xlinkHref='#mangosteen'></use>
          </svg>
          <h1>山竹记账</h1>
        </header>
        <main class={s.main} ref={refMain}>
          <RouterView name='main'>
            {({
              Component: X,
              route: R,
            }: {
              Component: VNode
              route: RouteLocationNormalizedLoaded
            }) => {
              console.log(R) // 可以通过 R 的值 判断路由动画方向
              return (
                <Transition
                  enterFromClass={s.slide_fade_enter_from}
                  enterActiveClass={s.slide_fade_enter_active}
                  leaveToClass={s.slide_fade_leave_to}
                  leaveActiveClass={s.slide_fade_leave_active}
                >
                  {X}
                </Transition>
              )
            }}
          </RouterView>
        </main>
        <footer>
          <RouterView name='footer' />
        </footer>
      </div>
    )
  },
})
