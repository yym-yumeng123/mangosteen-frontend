import { defineComponent, PropType, ref } from "vue"
import { MainLayout } from "../../layouts/MainLayout"
import { Icon } from "../../shared/Icon/Icon"
import { TabItem, Tabs } from "../../shared/Tabs/Tabs"
import { InputPad } from "./InputPad"
import s from "./ItemCreate.module.scss"

export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const refKind = ref("支出")

    const onClickBack = () => {}

    return () => (
      <MainLayout>
        {{
          title: () => "记一笔",
          icon: () => (
            <Icon name='left' class={s.navIcon} onClick={onClickBack} />
          ),
          default: () => (
            <>
              <Tabs v-model:selected={refKind.value}>
                <TabItem name='支出'>支出</TabItem>
                <TabItem name='收入'>收入</TabItem>
              </Tabs>

              <div class={s.inputPad_wrapper}>
                <InputPad />
              </div>
            </>
          ),
        }}
      </MainLayout>
    )
  },
})
