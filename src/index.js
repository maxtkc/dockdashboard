import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const $ = require('jquery');

window.$ = $;

var ws = new WebSocket('ws://localhost:40510');

ws.onmessage = function (ev) {
  set_table_data("test-table", JSON.parse(ev.data));
  console.log(ev);
}


function table_edit() {
  ws.send(JSON.stringify(get_table_data("test-table")));
}

function set_table_data(id, arr) {
  $("#" + id + " tr").each((i, row) => {
    $(row).children("td").each((j, cell) => {
      cell.innerHTML = arr[i][j];
    });
  });
}

function get_table_data(id) {
  let arr = [];
  $("#" + id + " tr").each((i, row) => {
    arr[i] = [];
    $(row).children("td").each((j, cell) => {
      arr[i][j] = cell.innerHTML;
      console.log(arr);
      console.log(cell.innerHTML);
      console.log($(cell));
      console.log(i + ", " + j);
    });
  });
  return arr;
}

let startingdata = {
  Sunset: "8/24/2019, 11:22:07 PM",
  Weather: [
    {date: "8/24/2019, 5:22:07 PM", temperature: 80, weather: "Cloudy", windDirection: 90, windSpeed: 15, flag: "Yellow", restrictions: "None"},
    {date: "8/24/2019, 7:22:07 PM", temperature: 84, weather: "Cloudy", windDirection: 180, windSpeed: 10, flag: "Green", restrictions: "Pink sails"},
    {date: "8/24/2019, 9:22:07 PM", temperature: 77, weather: "Cloudy", windDirection: 45, windSpeed: 11, flag: "Green", restrictions: "Pink sails"}
  ]
}

window.table_edit = table_edit;
