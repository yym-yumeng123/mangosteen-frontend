import s from "./WelcomeLayout.module.scss"
import Cloud from "../../assets/icons/cloud.svg"
import { RouterLink } from "vue-router"
import { WelcomeLayout } from "./WelcomeLayout"

export const WelcomeForth = () => {
  const slots = {
    icon: () => <img src={Cloud} />,
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
        <RouterLink to='/start'>下一步</RouterLink>
        <RouterLink class={s.fake} to='/start' />
      </>
    ),
  }
  return <WelcomeLayout v-slots={slots} />
}

WelcomeForth.displayName = "WelcomeForth"