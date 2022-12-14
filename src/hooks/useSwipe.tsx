import { computed, onMounted, onUnmounted, ref, Ref } from "vue"

type Point = { x: number; y: number }

interface Options {
  beforeStart?: (e: TouchEvent) => void
  afterStart?: (e: TouchEvent) => void
  beforeMove?: (e: TouchEvent) => void
  afterMove?: (e: TouchEvent) => void
  beforeEnd?: (e: TouchEvent) => void
  afterEnd?: (e: TouchEvent) => void
}

export const useSwipe = (
  element: Ref<HTMLElement | null>,
  options?: Options
) => {
  const start = ref<Point | null>(null)
  const end = ref<Point | null>(null)
  const swiping = ref(false)

  // 可以设置距离多少再移动
  const distance = computed(() => {
    if (!end.value || !start.value) return null

    return {
      x: end.value?.x - start.value?.x,
      y: end.value?.y - start.value?.y,
    }
  })

  const direction = computed(() => {
    if (!swiping) return null
    if (!distance.value) return null
    const { x, y } = distance.value
    if (Math.abs(x) > Math.abs(y)) {
      return x > 0 ? "right" : "left"
    } else {
      return y > 0 ? "down" : "up"
    }
  })

  const onStart = (e: TouchEvent) => {
    options?.beforeStart?.(e)
    const { clientX, clientY } = e.touches[0]
    start.value = {
      x: clientX,
      y: clientY,
    }
    end.value = null
    swiping.value = true
    options?.afterStart?.(e)
  }

  const onMove = (e: TouchEvent) => {
    options?.beforeMove?.(e)
    const { clientX, clientY } = e.touches[0]
    if (swiping.value) {
      end.value = {
        x: clientX,
        y: clientY,
      }
    }
    options?.afterMove?.(e)
  }

  const onEnd = (e: TouchEvent) => {
    options?.beforeEnd?.(e)
    swiping.value = false
    start.value = null
    end.value = null
    options?.afterEnd?.(e)
  }

  onMounted(() => {
    if (!element.value) return null
    element.value.addEventListener("touchstart", onStart)
    element.value.addEventListener("touchmove", onMove)
    element.value.addEventListener("touchend", onEnd)
  })

  onUnmounted(() => {
    if (!element.value) return null
    element.value.removeEventListener("touchstart", onStart)
    element.value.removeEventListener("touchmove", onMove)
    element.value.removeEventListener("touchend", onEnd)
  })

  return {
    swiping,
    distance,
    direction,
  }
}
