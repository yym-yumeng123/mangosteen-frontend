import { defineComponent, PropType } from "vue"
import { MainLayout } from "../../layouts/MainLayout"
import { Icon } from "../../shared/Icon/Icon"
// import s from "./TagCreate.module.scss"
export const TagCreate = defineComponent({
  setup: (props, context) => {
    return () => (
      <MainLayout>
        {{
          title: () => "新建标签",
          icon: () => <Icon name='left' />,
          default: () => <div>create</div>,
        }}
      </MainLayout>
    )
  },
})
