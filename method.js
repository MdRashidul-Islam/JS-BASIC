const student = {
  id: 25,
  name: "Rashidul",
  major: "Chemistry",
  balance: 6000,
  isRich: false,
  subjects: ["english", "bangla", "math"],
  bestFriend: {
    name: "Koly",
    major: "Physics",
  },
  takeExam: function () {
    console.log(this.name, "taking exam");
  },
  treatDe: function (expense, boksis) {
    this.balance = this.balance - expense - boksis;
    return this.balance;
  },
};
student.takeExam();
const remaining = student.treatDe(500, 20);
const remaining2 = student.treatDe(500, 30);
console.log(remaining2);
