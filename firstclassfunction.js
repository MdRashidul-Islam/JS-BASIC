//example: 1
function callMyName(name, callback) {
  const myAge = 20;
  callback(myAge);
  console.log(`Yes it is Mr. ` + name);
}

function hello(age) {
  console.log(`my age` + age);
}

callMyName("Rony", hello);

//example: 2

function gf(name, callback) {
  const gfAge = 17;
  console.log(`She is :` + name);
  callback(gfAge);
}

function calculateAge(age) {
  console.log(`she is` + age);
}

gf("Mary", calculateAge);
