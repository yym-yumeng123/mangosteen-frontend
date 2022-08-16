import { defineComponent } from "vue"
import { RouterView } from "vue-router"
import './App.scss'

const App = defineComponent({
  setup() {
    return () => (
      <div class="wrapper">
        <RouterView />
      </div>
    )
  },
})

export default App
