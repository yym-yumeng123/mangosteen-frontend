import { defineComponent } from "vue"
import { Button } from "../shared/Button/Button"
import { Center } from "../shared/Center/Center"
import { FloatButton } from "../shared/FloatButton/FloatButton"
import { Icon } from "../shared/Icon/Icon"
import s from "./StartPage.module.scss"

export const StartPage = defineComponent({
  setup: (props, context) => {
    console.log(context, "context")

    const onClick = () => {
      console.log("hi")
    }
    return () => (
      <div>
        <nav>menu</nav>
        <Center class={s.pig_wrapper}>
          <Icon name='pig' class={s.pig} />
        </Center>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={onClick}>
            开始记账
          </Button>
          <FloatButton iconName='add' />
        </div>
      </div>
    )
  },
})
