import PaymentFactory from '../Factories/PaymentFactory';

class Checkout {
  constructor(paymentType) {
    this.payment = new PaymentFactory().initPayment(paymentType);
  }

  executePayment() {
    this.payment.execute();
  }
}
