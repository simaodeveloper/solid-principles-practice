import PaymentCreditCard from '../Entities/PaymentCreditCard';
import PaymentPaypal from '../Entities/PaymentPaypal';
import PaymentWire from '../Entities/PaymentWire';

export default class PaymentFactory {
  constructor() {
    this.payments = {
      creditcard: () => new PaymentCreditCard(),
      paypal: () => new PaymentPaypal(),
      wire: () => new PaymentWire(),
    };
  }

  initPayment(type) {
    return this.payments[type]();
  }
}
