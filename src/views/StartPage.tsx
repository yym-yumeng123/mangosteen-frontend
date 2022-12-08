import { defineComponent, ref } from "vue"
import { Button } from "../shared/Button/Button"
import { Center } from "../shared/Center/Center"
import { FloatButton } from "../shared/FloatButton/FloatButton"
import { Icon } from "../shared/Icon/Icon"
import { NavBar } from "../shared/Navbar/Navbar"
import { Overlay } from "../shared/Overlay/Overlay"
import s from "./StartPage.module.scss"

export const StartPage = defineComponent({
  setup: (props, context) => {
    const overlayVisible = ref(false)

    const onClick = () => {
      console.log("hi")
    }

    const onClickMenu = () => {
      console.log("menu")
      overlayVisible.value = !overlayVisible.value
    }

    return () => (
      <div>
        <NavBar>
          {{
            default: () => "山竹记账",
            icon: () => (
              <Icon name='menu' class={s.navIcon} onClick={onClickMenu} />
            ),
          }}
        </NavBar>
        <Center class={s.pig_wrapper}>
          <Icon name='pig' class={s.pig} />
        </Center>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={onClick}>
            开始记账
          </Button>
          <FloatButton iconName='add' />
        </div>

        {overlayVisible.value && <Overlay onClose={() => overlayVisible.value = false} />}
      </div>
    )
  },
})
