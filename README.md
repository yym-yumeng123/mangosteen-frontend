# Vue 3 + TypeScript + Vite

### 创建项目

```bash
pnpm create vite projectName -- --template --vue-ts 
```

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

### 引入 vue-router4

```
yarn add vue-router@4
```

### 页面划分和布局

```js
// 前端路由
/welcome/1 // 欢迎页
/welcome/2
/welcome/3
/welcome/4
/start  // 开始页
/items/new
/tags/new // 标签详情
/session/new // 登录页
/statistics // 统计页

// 组件划分
layout/welcome
layout/main
tabs
button
overlay
...

// 排期
每个页面工作量不同
每个组件工作量不同
不能一概而论
留好 buffer: 预估的时间乘以n => 1.2 < n < 3.14
```
