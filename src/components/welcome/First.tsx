import s from "./WelcomeLayout.module.scss"
import Pig from "../../assets/icons/pig.svg"
import { RouterLink } from "vue-router"
import { WelcomeLayout } from "./WelcomeLayout"

export const WelcomeFirst = () => {
  return (
    <WelcomeLayout>
      {{
        icon: () => <img src={Pig} />,
        title: () => (
          <h2>
            会挣钱
            <br />
            还要会省钱
          </h2>
        ),
        buttons: () => (
          <>
            <RouterLink class={s.fake} to='/start' />
            <RouterLink to='/welcome/two'>下一步</RouterLink>
            <RouterLink to='/start'>跳过</RouterLink>
          </>
        ),
      }}
    </WelcomeLayout>
  )
}

WelcomeFirst.displayName = "WelcomeFirst"
