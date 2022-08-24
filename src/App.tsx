import { defineComponent } from "vue"
import { RouterView } from "vue-router"
import "./App.scss"

const App = defineComponent({
  setup() {
    return () => (
      <div class='page'>
        <RouterView />
      </div>
    )
  },
})

export default App
