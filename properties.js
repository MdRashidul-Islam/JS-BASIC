const laptop = {
  color: "silver",
  price: 50000,
  ram: "8GB",
  isFast: true,
};

//get object keys
const keys = Object.keys(laptop);
console.log(keys);

//get object values
const values = Object.values(laptop);
console.log(values);

//get object keys and values
const pairs = Object.entries(laptop);
console.log(pairs);
//sill object key and value
//sill korle object er data delete/add kora jabe na ..kinto key value upate kora jabe.
Object.seal(laptop);
//delete from object
//freeze korle object er modde kisuy kora jabe na
Object.freeze(laptop);
//delete
delete laptop.ram;
console.log(laptop);

//
