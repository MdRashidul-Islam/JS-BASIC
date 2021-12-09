//main function
function sample(a, b, cb) {
  var c = a + b;
  var d = a - b;
  var result = cb(c, d);
  return result;
}

//
function sum(a, b) {
  return a + b;
}

var result = sample(3, 1, sum);
console.log(result);
//
var result2 = sample(4, 7, function (c, d) {
  return c - d;
});
console.log(result2);
//
var result3 = sample(4, 2, function (c, d) {
  return c * d;
});
console.log(result3);
//
var result4 = sample(4, 2, function (c, d) {
  return c / d;
});
console.log(result4);
