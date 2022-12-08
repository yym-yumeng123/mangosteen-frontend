import { defineComponent } from "vue"
import s from "./button.module.scss"

interface ButtonProps {
  onClick: (e: MouseEvent) => void
}

export const Button = defineComponent<ButtonProps>({
  // inheritAttrs: false,
  setup: (props, context) => {
    return () => <button class={s.button}>{context.slots.default?.()}</button>
  },
})
