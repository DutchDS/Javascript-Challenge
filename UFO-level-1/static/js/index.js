// Get a reference to the page tags
//##################################
var submit = d3.select("#submit");
var get_all = d3.select("#get-all");
var tableData = data;

// Arrow Functions to fill each row and column with UFO Sightings
//###############################################################
function bodyOnLoad() {  
    var tbody = d3.select("tbody");
      
    tbody.html(" ");

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

// Define what to do when 'get all sightings' date is clicked
//###########################################################
get_all.on("click", function() {
  bodyOnLoad()
});
  
// Define what to do when 'search for specific date' is clicked
//#################################################################
submit.on("click", function() {

  d3.event.preventDefault();
  var inputElement = d3.select("#datetime-form-input");
  console.log(inputElement);

  var inputValue = inputElement.property("value");
  console.log(inputValue);

  var filteredData = tableData.filter(tableData => {
        return tableData.datetime == inputValue;
      });
  console.log(filteredData);

// Arrow Functions to fill each row and column with UFO Sightings
//###############################################################
var tbody = d3.select("tbody");

tbody.html(" ");

filteredData.forEach((f) => {
    console.log(f);
    var row = tbody.append("tr");
    Object.entries(f).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});