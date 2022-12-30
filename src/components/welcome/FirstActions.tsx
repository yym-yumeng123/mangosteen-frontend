import s from "./welcome.module.scss"
import { RouterLink } from "vue-router"
import { FunctionalComponent } from "vue"
import { SkipFeatures } from "../../shared/SkipFeatures/SkipFeatures"
export const FirstActions: FunctionalComponent = () => {
  return (
    <div class={s.actions}>
      <SkipFeatures class={s.fake} />
      <RouterLink to='/welcome/two'>下一页</RouterLink>
      <SkipFeatures />
    </div>
  )
}

FirstActions.displayName = "FirstActions"
