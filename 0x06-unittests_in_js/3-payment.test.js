const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('Use calculateNumber method for sending payment request', () =>{
    const buyer = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(buyer.(calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(buyer.calculateNumber.callCount).to.be.equal(1);
    buyer.calculateNumber.restore();
  });
});
