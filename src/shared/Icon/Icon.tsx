import { defineComponent, PropType } from "vue"
import s from "./Icon.module.scss"

interface IconProps {
  name: "add" | "chart" | "clock" | "cloud" | "mangosteen" | "pig"
}

export const Icon = defineComponent({
  // inheritAttrs: false,
  props: {
    name: {
      type: String as PropType<
        "add" | "chart" | "clock" | "cloud" | "mangosteen" | "pig"
      >,
    },
  },
  setup: (props) => {
    const { name } = props
    return () => (
      <svg class={s.icon}>
        <use xlinkHref={'#' + name}></use>
      </svg>
    )
  },
})
