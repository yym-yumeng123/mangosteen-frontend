import { defineComponent } from "vue"
import { Button } from "../shared/Button/Button"
import s from "./StartPage.module.scss"

export const StartPage = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.button_wrapper}>
        <Button class={s.button}>开始记账</Button>
      </div>
    )
  },
})
