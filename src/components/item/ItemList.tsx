import { defineComponent, PropType, ref } from "vue"
import { MainLayout } from "../../layouts/MainLayout"
import { Icon } from "../../shared/Icon/Icon"
import { TabItem, Tabs } from "../../shared/Tabs/Tabs"
import s from "./ItemList.module.scss"

export const ItemList = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const refSelected = ref("本月")
    return () => (
      <MainLayout>
        {{
          title: () => "山竹记账",
          icon: () => <Icon name='menu' />,
          default: () => (
            <Tabs
              classPrefix={"customTabs"}
              v-model:selected={refSelected.value}
            >
              <TabItem name='本月'>list 1</TabItem>
              <TabItem name='上月'>list 2</TabItem>
              <TabItem name='今年'>list 3</TabItem>
              <TabItem name='自定义时间'>list 4</TabItem>
            </Tabs>
          ),
        }}
      </MainLayout>
    )
  },
})
