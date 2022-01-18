/*
Different kinds of loops
for
do...while
while
break
continue
*/

//for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//do while loop
let num = 30;
do {
  console.log(`number is` + num);
  num += 1;
} while (num <= 40);
{
  console.log(`outside the loop`);
}

//while loop

let numb = 10;
while (numb < 10) {
  console.log(`inside the loopo`);
  numb += 1;
}

//Break statement

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(`i=:`, i);
}

//continue statement

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(`i=:`, i);
}
