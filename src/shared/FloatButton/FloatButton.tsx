import { defineComponent, PropType } from "vue"
import { Icon, IconNames } from "../Icon/Icon"
import s from "./floatButton.module.scss"

export const FloatButton = defineComponent({
  props: {
    iconName: {
      type: String as PropType<IconNames>,
      required: true
    },
  },
  setup: (props, context) => {
    return () => (
      <div class={s.floatButton}>
        <Icon name={props.iconName} class={s.icon} />
      </div>
    )
  },
})
