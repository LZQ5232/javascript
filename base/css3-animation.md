### animation属性
- animation-name 
指定 @keyframes 动画的名称

- animation-duration
动画完成一个周期的时间，默认为0s

- animation-timing-function
动画运行的节奏，默认是 ease
ease         缓慢开始，缓慢结束
ease-in      先慢后快
ease-out     先快后慢
ease-in-out  以慢速开始和结束的过渡效果
linear       平滑效果
step-start	 步进，忽略第一帧
step-end	 步进，忽略最后一帧
step-middle	 步进，从第一帧到最后一帧

- animation-delay 
动画开始播放的延迟时间，默认是0


- animation-iteration-count
动画播放的次数，默认是 1
    不可以为负数
    infinite 表示无限循环
    可以为小数，比如 0.5 代表播放动画的一半即结束

- animation-direction
动画是否在下一个周期逆向播放
    normal: 每次从 @keyframes 0% 执行到 100%，一个周期结束后立即回到 0% 的位置
    alternate: 假设 animation-iteration-count: infinite，从 @keyframes 0% 执行到 100%后，再从 100% 的位置 回到 0%，周而复始
    reverse: 每次从 @keyframes 100% 执行到 0%，，一个周期结束后立即回到 100% 的位置
    alternate-reverse: 假设 animation-iteration-count: infinite，从 @keyframes 100% 执行到 0%后，再从 0% 的位置 回到 100%，周而复始

- animation-fill-mode
规定动画的填充模式


- animation-play-state
控制动画的运行或暂停，默认是 running