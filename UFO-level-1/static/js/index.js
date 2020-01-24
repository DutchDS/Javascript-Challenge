// Get a reference to the page tags
//##################################
var submit = d3.select("#submit");
var get_all = d3.select("#get-all");

// Console.log the UFO data from data.js en set variable
//######################################################
var tableData = data;

function bodyOnLoad() {  
    // Arrow Functions to fill each row and column with UFO Sightings
    //###############################################################
    var tbody = d3.select("tbody");
      
    console.log(tableData);
  
    tableData.forEach((f) => {
      console.log(f);
      var row = tbody.append("tr");
      Object.entries(f).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  };

// Define what to do when submit date is clicked
//##############################################
submit.on("click", function() {

// //#####prevent the page from refreshing#############
// //##################################################
d3.event.preventDefault();

// //######select the input element and get the raw HTML node##########
// //##################################################################
var inputElement = d3.select("#datetime-form-input");
console.log(inputElement);

// //#####get the value property of the input elements#####
// //######################################################
var inputValue = inputElement.property("value");
console.log(inputValue);

// //#####Use form input to filter the date#####
// //######################################################
var filteredData = tableData.filter(tableData => {
  return tableData.datetime == inputValue;
});
console.log(filteredData);

// Arrow Functions to fill each row and column with UFO Sightings
//###############################################################
var tbody = d3.select("tbody");

filteredData.forEach((f) => {
  console.log(f);
  var row = tbody.append("tr");
  Object.entries(f).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// // OR: Use d3 to update each cell's text with
// data.forEach(function(data) {
//   console.log(data);
//   var row = tbody.append("tr");
//   Object.entries(data).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//     cell.text(value);
//   });
});

get_all.on("click", function() {
  
  // Arrow Functions to fill each row and column with UFO Sightings
  //###############################################################

  bodyOnLoad()
  // var tbody = d3.select("tbody");
    
  // console.log(tableData);

  // tableData.forEach((f) => {
  //   console.log(f);
  //   var row = tbody.append("tr");
  //   Object.entries(f).forEach(([key, value]) => {
  //     var cell = row.append("td");
  //     cell.text(value);
  //   });
  // });

});
  