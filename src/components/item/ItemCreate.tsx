import { defineComponent, PropType } from "vue"
import { MainLayout } from "../../layouts/MainLayout"
import { Icon } from "../../shared/Icon/Icon"
import s from "./ItemCreate.module.scss"

export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const onClickBack = () => {}

    return () => (
      <MainLayout>
        {{
          title: () => "记一笔",
          icon: () => (
            <Icon name='left' class={s.navIcon} onClick={onClickBack} />
          ),
          default: () => <>main</>,
        }}
      </MainLayout>
    )
  },
})
