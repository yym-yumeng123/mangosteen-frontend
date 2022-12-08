import s from "./welcome.module.scss"
import { defineComponent, FunctionalComponent, ref, watchEffect } from "vue"
import { useSwipe } from "../../hooks/useSwipe"
import { useRoute, useRouter } from "vue-router"

export const First = () =>
  defineComponent({
    setup: () => {
      const refDiv = ref<HTMLElement | null>(null)
      const { swiping, direction } = useSwipe(refDiv, {
        beforeStart: (e) => e.preventDefault()
      })
      const router = useRouter()

      watchEffect(() => {
        console.log("direction", direction.value)
        if (swiping.value && direction.value === "left") {
          console.log("1", 1)
          router.push("/welcome/two")
        }
      })

      return () => (
        <div class={s.card} ref={refDiv}>
          <svg>
            <use xlinkHref='#pig'></use>
          </svg>
          <h2>
            会挣钱
            <br />
            还会省钱
          </h2>
        </div>
      )
    },
  })
