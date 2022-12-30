import s from "./welcome.module.scss"
import { RouterLink } from "vue-router"
import { FunctionalComponent } from "vue"
import { SkipFeatures } from "../../shared/SkipFeatures/SkipFeatures"
export const ThirdActions: FunctionalComponent = () => {
  return (
    <div class={s.actions}>
      <SkipFeatures class={s.fake} />
      <RouterLink to='/welcome/four'>下一页</RouterLink>
      <SkipFeatures />
    </div>
  )
}

ThirdActions.displayName = "ThirdActions"
