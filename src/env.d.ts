/// <reference types="vite/client" />

declare module "*.scss" {
  const content: Record<string, any> = {}
  export default content
}

declare module "*.vue" {
  import type { DefineComponent } from "vue"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare var DEBUG: boolean

type JSONValue =
  | null
  | boolean
  | string
  | number
  | JSONValue[]
  | Record<string, JSONValue>

type Tag = {
  id: number
  user_id: number
  name: string
  sign: string
  kind: 'expenses' | 'income'
}

type Item = {
  id: number
  user_id: number
  amount: number
  tag_ids: number[]
  tags?: Tag[]
  happend_at: string
  kind: 'expenses' | 'income'
}

type Resources<T> = {
  resources: T[]
  pager: {
    page: number
    per_page: number
    count: number
  }
}

type Resource<T> = {
  resource: T
}

type ResourceError = {
  errors: Record<string, string[]>
}


type User = {
  id: number;
  email: string;
}


type FormErrors<T> = {[K in keyof typeof T]: string[]}