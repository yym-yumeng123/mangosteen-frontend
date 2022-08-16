import { defineComponent, ref } from "vue"
import { RouterLink, RouterView } from "vue-router"

const App = defineComponent({
  setup() {
    return () => (
      <>
        <RouterView />
      </>
    )
  },
})

export default App
