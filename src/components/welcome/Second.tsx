import s from "./WelcomeLayout.module.scss"
import Clock from "../../assets/icons/clock.svg"
import { RouterLink } from "vue-router"
import { WelcomeLayout } from "./WelcomeLayout"

export const WelcomeSecond = () => {
  const slots = {
    icon: () => <img src={Clock} />,
    title: () => (
      <h2>
        每日提醒
        <br />
        不遗漏每一笔账单
      </h2>
    ),
    buttons: () => (
      <>
        <RouterLink class={s.fake} to='/start' />
        <RouterLink to='/welcome/three'>下一步</RouterLink>
        <RouterLink to='/start'>跳过</RouterLink>
      </>
    ),
  }
  return <WelcomeLayout v-slots={slots} />
}

WelcomeSecond.displayName = "WelcomeSecond"