import s from "./welcome.module.scss"
import { RouterLink } from "vue-router"
import { FunctionalComponent } from "vue"
import { SkipFeatures } from "../../shared/SkipFeatures/SkipFeatures"
export const SecondActions: FunctionalComponent = () => {
  return (
    <div class={s.actions}>
      <SkipFeatures class={s.fake} />
      <RouterLink to='/welcome/three'>下一页</RouterLink>
      <SkipFeatures />
    </div>
  )
}

SecondActions.displayName = "FirstActions"
