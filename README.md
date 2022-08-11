# Vue 3 + TypeScript + Vite

```json

"scripts": {
  "dev": "vite", // 开发
  "build": "vue-tsc --noEmit && vite build", // 打包
  "preview": "vite preview" // 打包完场成预览
},
```

### 部署github

- settings/pages -> Branch/master save -> 打包 -> 部署github

```ts
export default defineConfig({
  base: '/mangosteen-frontend/dist/', // 添加 dist 在 github 上的路径
  plugins: [vue()]
})

```

### tempalte  VS  Tsx

```vue
<script setup lang="ts">
import { ref } from "vue"
const count = ref(0)
const onClick = () => {
  count.value++
}
</script>

<template>
  <div>{{ count }}</div>
  <button @click="onClick">按钮</button>
</template>

<style scoped></style>

```

```tsx
// 1. 安装 @vitejs/plugin-vue-jsx
// 2. vue.config.js 配置
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      transformOn: true,
      mergeProps: true,
    }),
  ],
})

// 3. 写jsx
import { defineComponent, ref } from "vue"

const App = defineComponent({
  setup() {
    const count = ref(0)
    const onClick = () => {
      count.value++
    }
    return () => (
      <>
        <div>{count.value}</div>
        <button onClick={onClick}>按钮</button>
      </>
    )
  },
})

export default App


```