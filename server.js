var express = require('express');

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 40510 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});

var app = express();

app.use(express.static('dist'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})



