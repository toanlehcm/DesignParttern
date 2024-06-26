// Define PaymentProcess
class PaymentProcess {
  payment(amount) { }
}

// Define VisaPaymentProcess class
class VisaPaymentProcess extends PaymentProcess {
  constructor(cardNumber, expiryDate, cvv) {
    super()
    this.cardNumber = cardNumber
    this.expiryDate = expiryDate
    this.cvv = cvv
  }

  // Implement the pay method.
  pay(amount) {
    console.log(`paying ${amount} USD with visa card ${this.cardNumber}`);
  }
}

//  Define MomoPaymentProcess.
class MomoPaymentProcess extends PaymentProcess {
  constructor(phoneNumber) {
    super()
    this.phoneNumber = phoneNumber
  }

  // Implement the pay method.
  pay(amount) {
    console.log(`paying ${amount} VND with momo ${this.phoneNumber}`);
  }
}

//  Define memberRegistration.
class MemberRegistration {
  constructor(paymentProcess) {
    this.paymentProcess = paymentProcess
  }

  // Regis.
  register() {
    const amount = 100; // the registration fee in USD.
    this.paymentProcess.pay(amount)
    console.log('registered!!!');
  }
}

export default function BridgePattern() {
  // Create visa.
  const visaPaymentProcessor = new VisaPaymentProcess('123.123', '12/25', '123')
  const membership = new MemberRegistration(visaPaymentProcessor)
  membership.register()

  // Create momo.
  const momoPaymentProcessor = new MomoPaymentProcess('123123123')
  const membershipMomo = new MemberRegistration(momoPaymentProcessor)
  membershipMomo.register()

  return (<><div>Bridge Pattern</div></>)
}