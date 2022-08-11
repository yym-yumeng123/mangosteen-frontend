import { defineComponent, ref } from "vue"
import { RouterLink, RouterView } from "vue-router"

const App = defineComponent({
  setup() {
    return () => (
      <>
      <header>
        <ul>
          <li><router-link to="/">Foo</router-link></li>
          <li><RouterLink to='/bar'>Bar</RouterLink></li>
        </ul>
      </header>
        <RouterView />
      </>
    )
  },
})

export default App
