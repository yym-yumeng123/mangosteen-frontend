import { defineComponent, ref } from "vue"

const App = defineComponent({
  setup() {
    const count = ref(0)
    const onClick = () => {
      count.value++
    }
    return () => (
      <>
        <div>{count.value}</div>
        <button onClick={onClick}>按钮</button>
      </>
    )
  },
})

export default App
