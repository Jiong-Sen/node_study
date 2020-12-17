const d = () => console.log('测试')

const g = () => {
  console.time('g2()')
  //做点事，并测量所需的时间。
  d()
  console.timeEnd('g2()')
}
g()
console.log('\x1b[33m%s\x1b[0m', '你好')
