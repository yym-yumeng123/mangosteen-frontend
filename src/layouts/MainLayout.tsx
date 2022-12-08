import { defineComponent } from "vue"
import { NavBar } from "../shared/Navbar/Navbar"

export const MainLayout = defineComponent({
  setup: (props, context) => {
    return () => (
      <div>
        <NavBar>
          {{
            default: () => context.slots?.title?.(),
            icon: () => context.slots?.icon?.(),
          }}
        </NavBar>
        {context.slots?.default?.()}
      </div>
    )
  },
})
