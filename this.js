/*implicit binding
explicit binding
new binding
window binding*/

//implicit binding start

// var printPlayerName = function (name) {
//   console.log(name);
// };

/*const Rony = {
  name: "Rony",
  age: 22,
  printPlayerName: function () {
    console.log(this);
  },
};

Rony.printPlayerName();*/

/*const printPlayerNameFunction = function (obj) {
  obj.printPlayerName = function () {
    console.log(this);
  };
};
const rony = {
  name: "Rony",
  age: 22,
};
const koly = {
  name: "koly",
  age: 18,
};

printPlayerNameFunction(rony);
printPlayerNameFunction(koly);
rony.printPlayerName();
koly.printPlayerName();
*/

var person = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      // console.log(this);
    },
    father: {
      name: "me.baba",
      printName: function () {
        // console.log(this.name);
      },
    },
  };
};

const rony = person("sakib", 35);
rony.father.printName();
//implicit binding end

//explicit binding start

const printName = function (v1, v2) {
  console.log(`${this.name} is ${v1} , ${v2}`);
};

const jony = {
  name: "jony",
  age: 36,
};

const v1 = "Honest";
const v2 = "Great";

const v = [v1, v2];

// printName.call(jony, v1, v2);
// printName.apply(jony, v);

const bindMethod = printName.bind(jony, v1, v2);
bindMethod();

//explicit binding end

//newBinding start
function person1(name, age) {
  // let this=Object.create(null);
  this.name = name;
  this.age = age;
  console.log(`${name}is ${age} years old`);
  // return this;
}

const koly = new person1("koly", 18);
//newBinding end

//window binding start
("use strict");
const printName2 = function () {
  console.log(this.name);
};
const afrin = {
  name: "Afrin",
  age: 17,
};
printName2();
//window binding end
