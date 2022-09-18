import { defineComponent } from "vue"
import { Icon } from "../Icon/Icon"
import s from "./floatButton.module.scss"

export const FloatButton = defineComponent({
  setup: (props, context) => {
    return () => <Icon name='add' />
  },
})
