const oldArray = new Array("Rony", "Jony", "Moni", "Toni");
const name = ["Rony", "Jony", "Moni", "Toni"];
//change value by elements index number.
name[0] = "sony";
//arry length
const arrayLength = name.length;

for (let i = 0; i < arrayLength; i++) {}

const indexNUM = name[2];

//push
name.push(`koly`);

//push in first
name.unshift(`taposi`);

//pop in last
name.pop();

//pop in first
name.shift();

//find index number
const position = name.indexOf("Moni");

//remove item by indx numebr
name.splice(0, 1);
console.log(name);

//splice

const laptop = ["hp", "dell", "asus", "apple", "gigabyte"];
const spliceArray = laptop.splice(1);
console.log(spliceArray);
