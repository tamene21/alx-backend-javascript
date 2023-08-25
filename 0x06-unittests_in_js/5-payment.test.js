const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let buyer;

  beforeEach(() => {
    if (!buyer) {
      buyer = sinon.spy(console);
    }
  });
  afterEach(() => {
    buyer.log.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20)', () => {
    sendPaymentRequestToApi(100, 20);
    expect(buyer.log.calledWith('The total is: 120')).to.be.true;
    expect(buyer.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10)', () => {
    sendPaymentRequestToApi(10, 10);
    expect(buyer.log.calledWith('The total is: 20')).to.be.true;
    expect(buyer.log.calledOnce).to.be.true;
  });
});
