const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const third = first;
if (first == second) {
  console.log("Object are equal");
} else {
  console.log("Object are not equal");
}

if (first == third) {
  console.log("Object are equal");
} else {
  console.log("Object are not equal");
}

if (JSON.stringify(first) == JSON.stringify(second)) {
  console.log("They are equal");
} else {
  console.log("They are not equal");
}

const first1 = { a: 1, b: 2 };
const second1 = { b: 3, a: 1 };

if (JSON.stringify(first1) == JSON.stringify(second1)) {
  console.log("They are equal");
} else {
  console.log("They are not equal");
}

function compareObjects(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  /*if (Object.values(object1).length == Object.values(object2).length) {
    console.log(Object.values(object1));
    console.log(Object.values(object2));
    return false;
  }*/
  for (const prop in object1) {
    if (object1[prop] !== object2[prop]) {
      return false;
    }
    return true;
  }
}
const isEqual = compareObjects(first1, second1);
console.log(isEqual);
