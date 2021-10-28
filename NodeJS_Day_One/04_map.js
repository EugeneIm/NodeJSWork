
function map(array, callback) {
  // Put your solution here
}
module.exports = map


// test that map works 
// the result should return each number doubled
const testResult = map([1,2,3,4,5], function(number) {
  return number*2
})

console.log(testResult)
// [2,4,6,8,10]
