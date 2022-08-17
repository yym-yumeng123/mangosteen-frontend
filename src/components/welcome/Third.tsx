import { defineComponent } from "vue"
import s from "./First.module.scss"
import Pig from "../../assets/icons/pig.svg"
import { RouterLink } from "vue-router"

export const WelcomeThird = defineComponent({
  setup() {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img src={Pig} />
          <h2>
            会挣钱
            <br />
            还要会省钱
          </h2>
        </div>
        <div class={s.actions}>
          <RouterLink class={s.fake} to='/start' />
          <RouterLink to='/welcome/four'>下一步</RouterLink>
          <RouterLink to='/start'>跳过</RouterLink>
        </div>
      </div>
    )
  },
})
