import { defineComponent } from "vue"
import { Button } from "../shared/Button/Button"
import { FloatButton } from "../shared/FloatButton/FloatButton"
import s from "./StartPage.module.scss"

export const StartPage = defineComponent({
  setup: (props, context) => {
    const onClick = () => {
      console.log("hi")
    }
    return () => (
      <div class={s.button_wrapper}>
        <Button class={s.button} onClick={onClick}>
          开始记账
        </Button>
        <FloatButton />
      </div>
    )
  },
})
