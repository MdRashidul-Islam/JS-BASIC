/*
if statement
if...else statement
if...else if statement
*/

const isWriting = true;

if (isWriting === false) {
  console.log(`not writing yet`);
} else if (true) {
  console.log(`Thanks for writing`);
} else {
  console.log(`get out from here`);
}

const a = 10;
const b = 20;
const c = 15;

if (a <= b || a >= b) {
  console.log(`Result a=10`);
}
if (a <= b && a >= b) {
  console.log(`a=10`);
}

const num = 11;
if (num > 5) {
  if (num > 10) {
    console.log(`num>10`);
  } else {
    console.log(`num<10`);
  }
}
