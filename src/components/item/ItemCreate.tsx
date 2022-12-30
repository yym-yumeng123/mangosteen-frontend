import { defineComponent, onMounted, PropType, ref } from "vue"
import { MainLayout } from "../../layouts/MainLayout"
import { Icon } from "../../shared/Icon/Icon"
import { TabItem, Tabs } from "../../shared/Tabs/Tabs"
import { InputPad } from "./InputPad"
import s from "./ItemCreate.module.scss"
import { Tags } from "./Tags"

export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const refKind = ref("支出")
    const refTagId = ref<number>()
    const refHappenAt = ref<string>(new Date().toISOString())
    const refAmount = ref<number>(0)

    return () => (
      <MainLayout class={s.layout}>
        {{
          title: () => "记一笔",
          icon: () => <Icon name='left' class={s.navIcon} />,
          default: () => (
            <>
              <div class={s.wrapper}>
                <Tabs v-model:selected={refKind.value} class={s.tabs}>
                  <TabItem name='支出'>
                    <Tags kind='expenses' v-model:selected={refTagId.value} />
                  </TabItem>
                  <TabItem name='收入'>
                    <Tags kind='income' v-model:selected={refTagId.value} />
                  </TabItem>
                </Tabs>
                <div class={s.inputPad_wrapper}>
                  <InputPad
                    v-model:happenAt={refHappenAt.value}
                    v-model:amount={refAmount.value}
                  />
                </div>
              </div>
            </>
          ),
        }}
      </MainLayout>
    )
  },
})
