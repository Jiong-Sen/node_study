// 创建一个serve服务器
const http = require('http')
const hostname = '127.0.0.1'
const port = 9098
const server = http.createServer((req, res) => {
  // 返回内容
  if (req.url == '/1.html') {
    res.statusCode = 301
    res.write(req.url)
  } else if (req.url == '/2.html') {
    res.statusCode = 201
    res.setHeader('Content-Type', 'text/plain').res.end('你好世界\n')
    res.write('2222222222')
  } else {
    res.write(111)
  }
  res.end()
})

// 监听端口号
// 端口号,
// host
// 回调函数
server.listen(port, hostname, () => {
  console.log(`服务器运行在http://${hostname}:${port}`)
})
