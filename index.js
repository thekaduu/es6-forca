const http = require('http')
const port = 3000
const ip = 'localhost'
var fs = require('fs');

var index = fs.readFileSync('./src/index.html');

const server = http.createServer((req, res) => {
  console.log('Recebendo uma request!')
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);
})

server.listen(port, ip, () => {
  console.log(`Servidor rodando em http://${ip}:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})