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