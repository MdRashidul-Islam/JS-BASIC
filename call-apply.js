const Rashidul = {
  id: 25,
  name: "Rashidul",
  major: "Chemistry",
  balance: 6000,

  treatDe: function (expense, boksis, tax) {
    this.balance = this.balance - expense - boksis - tax;
    console.log(this);
    return this.balance;
  },
};
const koly = {
  id: 102,
  balance: 7000,
  name: "Koly",
};

Rashidul.treatDe.call(koly, 200, 100, 50);
Rashidul.treatDe.call(Rashidul, 200, 100, 50);

//apply
Rashidul.treatDe.apply(koly, [200, 100, 100]);
