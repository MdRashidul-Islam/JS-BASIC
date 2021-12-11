const laptop = {
  color: "silver",
  price: 50000,
  ram: "8GB",
  isFast: true,
};

for (const prop in laptop) {
  // console.log(prop, ":", laptop[prop]);
}

const keys = Object.keys(laptop);
for (const prop of keys) {
  console.log(prop, ":", laptop[prop]);
}

//entries
const entries = Object.entries(laptop);
for (const [key, value] of Object.entries(laptop)) {
  console.log(key, value);
}
