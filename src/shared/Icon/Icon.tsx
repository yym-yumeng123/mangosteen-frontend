import { defineComponent, PropType } from "vue"
import s from "./Icon.module.scss"

export type IconNames =
  | "add"
  | "chart"
  | "clock"
  | "cloud"
  | "mangosteen"
  | "pig"
  | "menu"
  | "export"
  | "notify"

export const Icon = defineComponent({
  // inheritAttrs: false,
  props: {
    name: {
      type: String as PropType<IconNames>,
      required: true,
    },
  },
  setup: (props) => {
    const { name } = props
    return () => (
      <svg class={s.icon}>
        <use xlinkHref={"#" + name}></use>
      </svg>
    )
  },
})
