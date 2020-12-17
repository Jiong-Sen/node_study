const function2 = () => console.trace()
const function1 = () => function2()
function1()
// https://www.runoob.com/try/try.php?filename=tryjsref_console_trace
// 展示函数的调用堆栈踪迹  调用步骤
// 最上层为最后调用的
