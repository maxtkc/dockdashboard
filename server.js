var express = require('express');

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 40510 });

let test_table_data = "[[],[\"Mark\",\"Otto\",\"@mdo\"],[\"Jacob\",\"Thornto\",\"@fat\"],[\"Larry\",\"the Bird\",\"@twitter\"]]";

wss.on('connection', function connection(ws) {
  ws.send(test_table_data);
  ws.on('message', function incoming(data) {
    test_table_data = data;
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



