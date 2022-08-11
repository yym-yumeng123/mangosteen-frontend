import { defineComponent, ref } from "vue"

 const Bar = defineComponent({
  setup() {
    const count = ref(0)
    const onClick = () => {
      count.value++
    }
    return () => (
      <>
        <div>{count.value}</div>
        <button onClick={onClick}>Bar</button>
      </>
    )
  },
})

export default Bar