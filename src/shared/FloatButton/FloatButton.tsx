import { defineComponent } from "vue"
import { Icon } from "../Icon/Icon"
import s from "./floatButton.module.scss"

export const FloatButton = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.floatButton}>
        <Icon name='add' class={s.icon} />
      </div>
    )
  },
})
