# react-time-countdown

React的倒计时组件

1. npm：<https://www.npmjs.com/package/react-time-countdown>
2. demo：<https://realgeoffrey.github.io/react-time-countdown/demo/index.html>

### 安装-引用
1. Node.js

    ```shell
    npm install react-time-countdown --save
    ```

    ```tsx
    import TimeCountdown from 'react-time-countdown'
    ```
2. 浏览器

    ```html
    <!-- 需要先引入react技术栈：
        <script src='//unpkg.com/react@18/umd/react.production.min.js' ></script>
        <script src='//unpkg.com/react-dom@18/umd/react-dom.production.min.js'></script>

        <script src='//unpkg.com/babel-standalone@6/babel.min.js'></script>
    -->
    <script src="//unpkg.com/react-time-countdown"></script>

    <script>
    const TimeCountdown = window['react-time-countdown'].default
    </script>
    ```

### 用法

```tsx
<TimeCountdown
  deadlineTimestamp={结束时间戳（必填）}
  callback={() => {
    // 倒计时结束时执行的回调函数
  }}
  leftSecond={提前到期的秒数（0）}
  renderSecond={(second: number): React.ReactNode => {
    // 参数：倒计时还剩下多少秒
    // 返回：渲染本组件
  }}
/>
```

### 开发调试
```shell
# 监听改变
yarn start

# 运行开发demo
cd dev
yarn start
```

```shell
# 构建生产环境文件
yarn build
```
