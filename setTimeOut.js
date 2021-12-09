const takeOrder = (customer, callback) => {
  console.log(`take order for customer${customer}`);
  callback(customer);
};

const processOrder = (customer, callback) => {
  console.log(`processing order for customer ${customer}`);

  setTimeout(() => {
    console.log(`Hi`);
    console.log(`order processed for customer${customer}`);
    callback(customer);
  });
};

// processOrder(`Rony`);

const completeOrder = (customer) => {
  console.log(`complete order for customer ${customer}`);
};

takeOrder("1", (customer) => {
  processOrder(customer, (customer) => {
    completeOrder(customer);
  });
});

console.log(`hello`);
