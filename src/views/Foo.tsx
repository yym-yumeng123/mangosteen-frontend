import { defineComponent, ref } from "vue"
import {useRoute} from 'vue-router'
 const Foo = defineComponent({
  setup() {
    const count = ref(0)
    const onClick = () => {
      // router.push('/dashboard')
    }
    return () => (
      <>
        <div>{count.value}</div>
        <button onClick={onClick}>Foo</button>
      </>
    )
  },
})

export default Foo