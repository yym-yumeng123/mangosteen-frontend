import { defineComponent, PropType } from "vue"
import s from "./Tabs.module.scss"

export const Tabs = defineComponent({
  props: {
    selected: {
      type: String as PropType<string>,
      // required: true,
    },
  },
  setup: (props, context) => {
    return () => {
      const array = context.slots.default?.()
      if (!array) return null
      for (let i = 0; i < array.length; i++) {
        if (array[i].type !== TabItem) {
          throw new Error("子元素必须是TabItem")
        }
      }

      return (
        <div class={s.tabs}>
          <ol class={s.tabs_nav}>
            {array.map((i) => {
              return (
                <li
                  class={i.props?.name === props.selected ? s.selected : ""}
                  onClick={() => context.emit("update:selected", i.props?.name)}
                >
                  {i.props?.name}
                </li>
              )
            })}
          </ol>
          <div>{array.find((i) => i.props?.name === props.selected)}</div>
        </div>
      )
    }
  },
})

export const TabItem = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    return () => <div>{context.slots.default?.()}</div>
  },
})
