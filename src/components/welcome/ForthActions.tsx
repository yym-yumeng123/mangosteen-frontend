import s from "./welcome.module.scss"
import { RouterLink } from "vue-router"
import { SkipFeatures } from "../../shared/SkipFeatures/SkipFeatures"
export const ForthActions = () => (
  <div class={s.actions}>
    <SkipFeatures class={s.fake} />
    <SkipFeatures>完成</SkipFeatures>
    <SkipFeatures class={s.fake} />
  </div>
)

ForthActions.displayName = "ForthActions"
