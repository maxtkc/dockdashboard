import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './solarized-bootstrap.min.css';

const $ = require('jquery');

window.$ = $;

var ws = new WebSocket('ws://localhost:40510');

ws.onmessage = function (ev) {
  set_data_table_data(JSON.parse(ev.data));
  gridOptions.api.sizeColumnsToFit();
  console.log(ev);
}


function table_edit() {
  ws.send(JSON.stringify(get_data_table_data()));
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

import {Grid} from "ag-grid-community";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";
import "ag-grid-community/dist/styles/ag-theme-bootstrap.css";

// specify the columns
var columnDefs = [
  {headerName: "Time", field: "date", editable: true},
  {headerName: "Temp", field: "temperature", editable: true},
  {headerName: "Weather", field: "weather", cellEditor: 'agSelectCellEditor', cellEditorParams: ["hello", "world", "goodbye sldkfj"], editable: true},
  {headerName: "Wind Direction", field: "windDirection", editable: true},
  {headerName: "Wind Speed", field: "windSpeed", editable: true},
  {headerName: "Flag", field: "flag", editable: true},
  {headerName: "Restrictions", field: "restrictions", editable: true}
];

// specify the data
//var rowData = [
//  {make: "Toyota", model: "Celica", price: 35000},
//  {make: "Ford", model: "Mondeo", price: 32000},
//  {make: "Porsche", model: "Boxter", price: 72000}
//];
//
console.log(startingdata);
console.log({data: JSON.stringify(startingdata.Weather)});

// let the grid know which columns and what data to use
var gridOptions = {
  columnDefs: columnDefs,
  //rowData: rowData,
  //rowData: startingdata.Weather,
  domLayout: 'autoHeight',
  singleClickEdit: true,
  onCellValueChanged: table_edit,
  //onCellClicked: () => console.log(get_data_table_data())
};


// lookup the container we want the Grid to use
var eGridDiv = document.querySelector('#myGrid');

// create the grid passing in the div to use together with the columns & data we want to use
new Grid(eGridDiv, gridOptions);

function get_data_table_data() {
  let grid = [];
  gridOptions.api.forEachNode((node, index) => grid.push(node.data));
  return grid;
}

function set_data_table_data(data) {
  gridOptions.api.setRowData(data);
}
