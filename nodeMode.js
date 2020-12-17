// 环境变量
// process.env.NODE_ENV = 'dev'
// console.log(process.env.NODE_ENV, '环境变量')
// 接受到的变量
// 第一个参数是 node 命令的完整路径。
// 第二个参数是正被执行的文件的完整路径。
// 所有其他的参数从第三个位置开始。
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`)
})
