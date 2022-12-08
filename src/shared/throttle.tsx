export const throttle = (fn: Function, time: number) => {
  let timer: number | undefined = undefined
  return (...args: any[]) => {
    // timer 存在调用过
    if (timer) {
      return
    } else {
      // 不存在, 调用
      fn(...args)

      // 给 timer 设值
      timer = setTimeout(() => {
        // 一段时间后, 清空 timer
        timer = undefined
      }, time)
    }
  }
}
