// from data.js;
var tableData = data;

var submit = d3.select("#submit");

submit.on("click", function() {


//#####prevent the page from refreshing#############
//##################################################

d3.event.preventDefault();

//######select the input element and get the raw HTML node##########
//##################################################################

var inputElement = d3.select("#datetime-form-input");

//#####get the value property of the input elements#####
//######################################################

var inputValue = inputElement.property("value");
console.log(inputValue);
console.log(tableData);

//#####Use form input to filter the date#####
//######################################################

var filteredData = data.filter(datetime => data.datatime === inputValue);

console.log(filteredData);



});