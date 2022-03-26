//var   keyword function scope maintain kore
//let   keyword block scope maintain kore
//const keyword block scope maintain kore

// var a = "Rashidul islam";
// a = "ROny";

// let b = "Rashidul Islam";
// b = "rony";

// const c = "Rashidul islam";

function es5var() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}

es5var();

function es6var() {
  if (true) {
    const a = 50;
  }
  // console.log(a);
}

es6var();

var i = 12;
for (var i = 0; i < 5; i++) {
  // console.log(i);
}
// console.log(i);

let i6 = 12;
for (let i6 = 0; i6 < 5; i6++) {
  console.log(i6);
}
console.log(i6);
