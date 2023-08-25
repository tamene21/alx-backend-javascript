const Utils = require('./utils');


const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const toatlCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${totalCost}`);
}

module.exports = sendPaymentRequestToApi;
