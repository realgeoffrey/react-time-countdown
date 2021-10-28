import React, { useEffect, useRef, useState } from 'react';

interface PropsType {
  deadlineTimestamp: number; // 结束时间戳

  leftSecond?: number; // 提前到期（秒，默认：0）

  callback?: Function; // 倒计时结束后回调
  renderSecond?: (second: number) => React.ReactNode; // 渲染倒计时（秒）
}

// 周期执行（构造函数）
const SET_INTERVAL = function (
  this: { stop: Function },
  func: Function,
  millisecond: number
) {
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
  return this;
};

// 获取剩余时间（秒）
const GET_REST_TIME = (deadlineTimestamp: number): number => {
  return Math.max(Math.round((deadlineTimestamp - Date.now()) / 1000), 0);
};

export const Thing = function (props: PropsType) {
  const {
    deadlineTimestamp,
    leftSecond: _leftSecond = 0,
    callback,
    renderSecond,
  } = props;

  const leftSecond = Math.max(_leftSecond, 0);

  // 每秒执行（实例）
  const setIntervalInstance = useRef<
    ReturnType<typeof SET_INTERVAL> | { stop: Function }
  >({ stop: () => {} });

  useEffect(() => {
    // 倒计时时间（秒）
    const restTime = GET_REST_TIME(deadlineTimestamp);

    setRestTotalSecond(restTime);

    if (restTime > leftSecond) {
      setIntervalInstance.current.stop();

      setIntervalInstance.current = new (SET_INTERVAL as any)(() => {
        setRestTotalSecond(GET_REST_TIME(deadlineTimestamp));

        if (GET_REST_TIME(deadlineTimestamp) <= leftSecond) {
          setIntervalInstance.current.stop();

          callback && callback();
        }
      }, 1000);
    }

    return () => {
      setIntervalInstance.current.stop();
    };
  }, [deadlineTimestamp, leftSecond, callback]);

  const [restTotalSecond, setRestTotalSecond] = useState<number>(
    GET_REST_TIME(deadlineTimestamp)
  );

  return <>{renderSecond ? renderSecond(restTotalSecond) : restTotalSecond}</>;
};

export default Thing;
