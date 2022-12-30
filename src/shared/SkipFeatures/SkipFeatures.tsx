import { defineComponent, PropType } from "vue"
import { RouteLocationRaw, RouterLink } from "vue-router"
export const SkipFeatures = defineComponent({
  setup: (props, context) => {
    const onClick = () => {
      localStorage.setItem("skipFeatures", "yes")
    }

    return () => (
      <span onClick={onClick}>
        <RouterLink to='/start'>
          {context.slots.default?.() || "跳过"}
        </RouterLink>
      </span>
    )
  },
})
