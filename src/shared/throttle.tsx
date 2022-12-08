export const throttle = <T extends (...args: unknown[]) => any>(
  fn: T,
  time: number
) => {
  let timer: number | undefined = undefined
  let result: ReturnType<T>
  return (...args: Parameters<T>) => {
    // timer 存在调用过
    if (timer) {
      return result
    } else {
      // 不存在, 调用
      fn(...args)

      // 给 timer 设值
      timer = setTimeout(() => {
        // 一段时间后, 清空 timer
        timer = undefined
      }, time)

      return result
    }
  }
}
