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

      <TimeCountdown
        deadlineTimestamp={deadline}
        callback={() => {
          console.log('callback');
        }}
        leftSecond={1}
        renderSecond={(second: number): React.ReactNode => {
          // 格式化数字格式
          const FORMAT_NUMBER = (number: number) => {
            if (number < 10) {
              return '0' + number;
            } else {
              return number.toString();
            }
          };
          return FORMAT_NUMBER(second);
        }}
      />

      <>
        <div
          onClick={() => {
            setDeadline(105 * 1000 + Date.now());
          }}
        >
          105
        </div>
        <div
          onClick={() => {
            setDeadline(15 * 1000 + Date.now());
          }}
        >
          15
        </div>
        <div
          onClick={() => {
            setDeadline(10 * 1000 + Date.now());
          }}
        >
          10
        </div>
        <div
          onClick={() => {
            setDeadline(5 * 1000 + Date.now());
          }}
        >
          5
        </div>
        <div
          onClick={() => {
            setDeadline(2 * 1000 + Date.now());
          }}
        >
          2
        </div>
        <div
          onClick={() => {
            setDeadline(1 * 1000 + Date.now());
          }}
        >
          1
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
