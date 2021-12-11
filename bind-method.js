const Rashidul = {
  id: 25,
  name: "Rashidul",
  major: "Chemistry",
  balance: 6000,

  treatDe: function (expense) {
    this.balance = this.balance - expense;
    console.log(this);
    return this.balance;
  },
};
const koly = {
  id: 102,
  balance: 7000,
  name: "Koly",
};

Rashidul.treatDe(100);

const kolyTreatdeo = Rashidul.treatDe.bind(koly);
kolyTreatdeo(600);
