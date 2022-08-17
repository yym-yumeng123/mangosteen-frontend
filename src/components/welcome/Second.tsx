import { defineComponent } from "vue"
import s from "./First.module.scss"
import Clock from "../../assets/icons/clock.svg"
import { RouterLink } from "vue-router"

export const WelcomeSecond = defineComponent({
  setup() {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img src={Clock} />
          <h2>
            每日提醒
            <br />
            不遗漏每一笔账单
          </h2>
        </div>
        <div class={s.actions}>
          <RouterLink class={s.fake} to='/start' />
          <RouterLink to='/welcome/three'>下一步</RouterLink>
          <RouterLink to='/start'>跳过</RouterLink>
        </div>
      </div>
    )
  },
})
