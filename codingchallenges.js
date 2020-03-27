// Coding Challenge 16: Create a function that puts all of the names in an array in alphabetical order.

var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

// Coding Challenge 17: Pandora needs a list of all of their town's names converted to lower case. Create a new array named lowerCase and map over each name to convert them all to lower case.
pandora = [{
"town" : "FireStone",
"population" : 5,
},
{
"town" : "Dog Town",
"population" : 7,
},
{
"town" : "Bandit Village",
"population" : 10,
}]

const lowerCase = pandora.map(function(obj) {
  return obj.town
});
console.log(lowerCase.toLowerCase());

// Coding Challenge 18:  Pandora is concerned about towns with a higher population count.  Using filter, find out which towns have a population of more than 5. Use the array of objects from above.