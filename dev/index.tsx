import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing as TimeCountdown } from '../.';

const App = () => {
  // 倒计时
  const [deadline, setDeadline] = React.useState(10 * 1000 + Date.now());

  return (
    <div>
      <h3>倒计时</h3>
      剩余：
      <TimeCountdown
        deadlineTimestamp={deadline}
        callback={() => {
          console.log('callback');
        }}
        leftMillisecond={1000}
        renderMillisecond={(millisecond: number): React.ReactNode => {
          // 格式化数字格式
          const FORMAT_NUMBER = (number: number) => {
            const numberStr = String(number);
            if (number < 1000) {
              return '0,' + '0'.repeat(3 - numberStr.length) + numberStr;
            } else {
              return numberStr.slice(0, -3) + ',' + numberStr.slice(-3);
            }
          };

          return FORMAT_NUMBER(millisecond);
        }}
        intervalDelay={1000}
      />
      ms
      <hr />
      <>
        设置结束时间戳：
        <div
          onClick={() => {
            setDeadline(105 * 1000 + Date.now());
          }}
        >
          105 * 1000
        </div>
        <div
          onClick={() => {
            setDeadline(15 * 1000 + Date.now());
          }}
        >
          15 * 1000
        </div>
        <div
          onClick={() => {
            setDeadline(10 * 1000 + Date.now());
          }}
        >
          10 * 1000
        </div>
        <div
          onClick={() => {
            setDeadline(5 * 1000 + Date.now());
          }}
        >
          5 * 1000
        </div>
        <div
          onClick={() => {
            setDeadline(3 * 1000 + Date.now());
          }}
        >
          3 * 1000
        </div>
        <div
          onClick={() => {
            setDeadline(2 * 1000 + Date.now());
          }}
        >
          2 * 1000
        </div>
        <div
          onClick={() => {
            setDeadline(1 * 1000 + Date.now());
          }}
        >
          1 * 1000
        </div>
        <div
          onClick={() => {
            setDeadline(0 * 1000 + Date.now());
          }}
        >
          0
        </div>
        <div
          onClick={() => {
            setDeadline(0);
          }}
        >
          -0
        </div>
      </>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
