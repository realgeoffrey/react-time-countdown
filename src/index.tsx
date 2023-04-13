import React, { useEffect, useRef, useState } from 'react';
import { SET_INTERVAL, GET_REST_TIME } from './utils';

interface PropsType {
  deadlineTimestamp: number; // 结束时间戳

  leftMillisecond?: number; // 提前到期（毫秒，默认：0）

  callback?: Function; // 倒计时结束后回调
  renderMillisecond?: (millisecond: number) => React.ReactNode; // 渲染倒计时（毫秒）

  intervalDelay?: number; // 每次调用渲染的间隔时间（毫秒，默认：1000）
}

export const Thing = function (props: PropsType) {
  const {
    deadlineTimestamp,
    leftMillisecond: _leftMillisecond = 0,
    callback,
    renderMillisecond,
    intervalDelay = 1000,
  } = props;

  const leftMillisecond = Math.max(_leftMillisecond, 0);

  // 每秒执行（实例）
  const setIntervalInstance = useRef<SET_INTERVAL | { stop: Function }>({
    stop: () => {},
  });

  useEffect(() => {
    // 倒计时时间（毫秒）
    const restTime = GET_REST_TIME(deadlineTimestamp);

    setRestTotalSecond(restTime);

    if (restTime > leftMillisecond) {
      setIntervalInstance.current.stop();

      setIntervalInstance.current = new SET_INTERVAL(() => {
        setRestTotalSecond(GET_REST_TIME(deadlineTimestamp));

        if (GET_REST_TIME(deadlineTimestamp) <= leftMillisecond) {
          setIntervalInstance.current.stop();

          callback && callback();
        }
      }, intervalDelay);
    }

    return () => {
      setIntervalInstance.current.stop();
    };
  }, [deadlineTimestamp, leftMillisecond, callback, intervalDelay]);

  const [restTotalSecond, setRestTotalSecond] = useState<number>(
    GET_REST_TIME(deadlineTimestamp)
  );

  return renderMillisecond
    ? renderMillisecond(restTotalSecond)
    : restTotalSecond;
};

export default Thing;
