const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question(`你叫什么名字?`, (name) => {
  console.log(`你好 ${name}!`)
  rl.close()
})
