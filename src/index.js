import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const $ = require('jquery');

window.$ = $;

var ws = new WebSocket('ws://localhost:40510');

ws.onmessage = function (ev) {
  //document.getElementById("name").value = ev.data;
  set_table_data("test-table", JSON.parse(ev.data));
    console.log(ev);
}

function test() {
    ws.send(document.getElementById("name").value);
}

function table_edit() {
  //  ws.send(get_table_data("test-table"));
  ws.send(JSON.stringify(get_table_data("test-table")));
}

function set_table_data(id, arr) {
  //for(let i = 0; i < arr.length; i++) {
    //for(let j = 0; j < arr.length; j++) {
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


//  //let cells = $("#" + id + " td");
//  let rows = $("#" + id + " tr");
//  let arr = [];
//
//  //console.log(cells);
//  for(let i = 1; i < rows.length; i++) {
//
//  }
//
//  for(let i = 0; i < cells.length; i++) {
//    console.log(cells[i].innerHTML);
//    if(i % 
//  }



  //let table = document.getElementById(name);
  //let obj = {};

  //$("#" + id + " tbody tr").each(function () {
  //  console.log($(this).val());
  //});
}

console.log("hello world");

let startingdata = {
  Sunset: "8/24/2019, 11:22:07 PM",
  Weather: [
    {date: "8/24/2019, 5:22:07 PM", temperature: 80, weather: "Cloudy", windDirection: 90, windSpeed: 15, flag: "Yellow", restrictions: "None"},
    {date: "8/24/2019, 7:22:07 PM", temperature: 84, weather: "Cloudy", windDirection: 180, windSpeed: 10, flag: "Green", restrictions: "Pink sails"},
    {date: "8/24/2019, 9:22:07 PM", temperature: 77, weather: "Cloudy", windDirection: 45, windSpeed: 11, flag: "Green", restrictions: "Pink sails"}
  ]
}

console.log(startingdata);

window.test = test;
window.table_edit = table_edit;

//  module.exports = {
//    test: test
//  };
