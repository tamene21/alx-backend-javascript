const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console', () =>{
    const buyer = sinon.spy(console);
    const spie = sinon.stub(Utils, 'calculateNumber');

    spie.returns(10);

    sendPaymentRequestToApi(100, 20);
    expect(spie.calledWith('SUM', 100, 20)).to.be.true;
    expect(spie.callCount).to.be.equal(1);
    expect(buyer.log.calledWith('The total is: 10')).to.be.true;
    expect(buyer.log.callCount).to.be.equal(1);
    spie.restore();
    buyer.log.restore();
  });
});
