// 周期执行（构造函数）
export class SET_INTERVAL {
  stop: Function;

  constructor(func: Function, millisecond: number) {
    let setIntervalId: ReturnType<typeof setTimeout>;
    if (typeof func === 'function') {
      setIntervalId = setTimeout(function self() {
        setIntervalId = setTimeout(self, millisecond);
        func();
      }, millisecond);
    }
    this.stop = () => {
      clearTimeout(setIntervalId);
    };
  }
}

// 获取剩余时间（毫秒）
export const GET_REST_TIME = (deadlineTimestamp: number): number => {
  return Math.max(Math.round(deadlineTimestamp - Date.now()), 0);
};
