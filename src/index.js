import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const $ = require('jquery');

window.$ = $;

var ws = new WebSocket('ws://localhost:40510');

ws.onmessage = function (ev) {
  //set_table_data("test-table", JSON.parse(ev.data));
  set_data_table_data(JSON.parse(ev.data));
  console.log(ev);
}


function table_edit() {
  //ws.send(JSON.stringify(get_table_data("test-table")));
  ws.send(JSON.stringify(get_data_table_data()));
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

import {Grid} from "ag-grid-community";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

    // specify the columns
    var columnDefs = [
      {headerName: "Make", field: "make", editable: true},
      {headerName: "Model", field: "model", editable: true},
      {headerName: "Price", field: "price", editable: true}
    ];

    // specify the data
    var rowData = [
      {make: "Toyota", model: "Celica", price: 35000},
      {make: "Ford", model: "Mondeo", price: 32000},
      {make: "Porsche", model: "Boxter", price: 72000}
    ];

    // let the grid know which columns and what data to use
    var gridOptions = {
      columnDefs: columnDefs,
      rowData: rowData,
      singleClickEdit: true,
      onCellValueChanged: table_edit
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

//import 'slickgrid-es6/dist/slick.grid.scss'
//import 'slickgrid';

//import { Grid, Data, Formatters } from 'slickgrid';
//import { options, columns } from './grid-config';

//const gridColumns = [{
//  id: "%",
//  name: "% Complete",
//  field: "percentComplete",
//  formatter: Formatters.PercentCompleteBar
//}]; // some column def
//

//import 'slickgrid/slick.grid.css';

//global.jQuery = require('jquery');

//import 'slickgrid/slick.core.js';
//import 'slickgrid/slick.grid.js';
//
//  var grid;
//  var columns = [
//    {id: "title", name: "Title", field: "title"},
//    {id: "duration", name: "Duration", field: "duration"},
//    {id: "%", name: "% Complete", field: "percentComplete"},
//    {id: "start", name: "Start", field: "start"},
//    {id: "finish", name: "Finish", field: "finish"},
//    {id: "effort-driven", name: "Effort Driven", field: "effortDriven"}
//  ];
//  var options = {
//    enableCellNavigation: true,
//    enableColumnReorder: false
//  };
//  $(function () {
//    var data = [];
//    for (var i = 0; i < 500; i++) {
//      data[i] = {
//        title: "Task " + i,
//        duration: "5 days",
//        percentComplete: Math.round(Math.random() * 100),
//        start: "01/01/2009",
//        finish: "01/05/2009",
//        effortDriven: (i % 5 == 0)
//      };
//    }
//    grid = new Slick.Grid("#myGrid", data, columns, options);
//  })

//import 'slickgrid/slick.formatters.js';
//import 'slickgrid/slick.editors.js';
//import 'slickgrid/slick.dataview.js';


//var columns = [
//  {id: "column1", name: "ID", field: "id"},
//  {id: "column2", name: "Language", field: "lang"},
//  {id: "column3", name: "Year", field: "year"}
//];
//
//const dataView = new Data.DataView();
//dataView.setItems([{'id': 0, 'percentComplete': 0}, {'id': 1, 'percentComplete': 23}, {'id': 2, 'percentComplete': 50}]); // some data
//
//const grid = new Grid($('#myGrid'), dataView, columns, {});
