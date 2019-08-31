var express = require('express');

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 40510 });

let test_table_data = "[{\"date\":\"8/24/2019, 5:22:07 PM\",\"temperature\":80,\"weather\":\"Cloudy\",\"windDirection\":90,\"windSpeed\":15,\"flag\":\"Yellow\",\"restrictions\":\"None\"},{\"date\":\"8/24/2019, 7:22:07 PM\",\"temperature\":84,\"weather\":\"Cloudy\",\"windDirection\":180,\"windSpeed\":10,\"flag\":\"Green\",\"restrictions\":\"Pink sails\"},{\"date\":\"8/24/2019, 9:22:07 PM\",\"temperature\":77,\"weather\":\"Cloudy\",\"windDirection\":45,\"windSpeed\":11,\"flag\":\"Green\",\"restrictions\":\"Pink sails\"}]"


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



