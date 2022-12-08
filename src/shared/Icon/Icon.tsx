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
  | 'charts'
  | 'left'

export const Icon = defineComponent({
  // inheritAttrs: false,
  props: {
    name: {
      type: String as PropType<IconNames>,
      required: true,
    },
    onClick: {
      type: Function as PropType<() => void>,
    },
  },
  setup: (props) => {
    const { name, onClick } = props
    return () => (
      <svg class={s.icon} onClick={onClick}>
        <use xlinkHref={"#" + name}></use>
      </svg>
    )
  },
})
