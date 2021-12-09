let rony = new Object();

let laptop = {
  brand: "HP",
  ram: "8gb",
  price: "52000",
};

/*
1.dot notation
2.bracket notation
*/

//dot notation
const price = laptop.price;

//bracket notation
const ram = laptop[`price`];

//add new item in a Object
laptop.hardDisk = "1TB";
console.log(laptop);

laptop.hardDisk = "1TBHDD + 120GBM.2";
console.log(laptop);

////////////////////////////////////////////////////////////////
let newItem = {
  name: "Mi Router",
  price: "1000",
};
