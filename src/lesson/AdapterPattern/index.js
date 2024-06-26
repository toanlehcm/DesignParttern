// define the momoPaymentAdapter class
class MomoPaymentAdapter {
  constructor(momoPayment) {
    this.momoPayment = momoPayment
  }

  // Define the payWithVisa method that is required by the youtube registration process
  paywithVisa(visaPayment) {
    //convert the momo to visa
    const convertedPayment = this.convertToVisaPayment(this.momoPayment)

    //make the payment using the Visa 
    visaPayment.pay(convertedPayment)
  }

  // Define the convertToVisaPayment method
  convertToVisaPayment(momoPayment) {
    //convert the momo to a visa
    const conversionRate = 23000 // 1 USD = 23.000 VND
    const visaAmount = momoPayment.amount / conversionRate
    const visaPayment = {
      cardNumber: momoPayment.cardNumber,
      expiryDate: momoPayment.expiryDate,
      cvv: momoPayment.cvv,
      amount: visaAmount,
    }

    return visaPayment
  }
}

//  Define the VisaPayment
class VisaPayment {
  pay(payment) {
    console.log(`Paying ${payment.amount} USD with visa card ${payment.cardNumber}`);
  }
}

//  Define the MonoPayment
class MomoPayment {
  constructor(cardNumber, expiryDate, cvv, visaAmount) {
    this.cardNumber = cardNumber
    this.expiryDate = expiryDate
    this.cvv = cvv
    this.amount = visaAmount
  }
}

export default function AdapterPattern() {
  // Create a momo.
  const momoPayment = new MomoPayment('123123123', '12/25', '123', 23000)
  // Create a momo to visa adapter.
  const momoAdapter = new MomoPaymentAdapter(momoPayment)
  // Crate a visa payment.
  const visaPayment = new VisaPayment()
  // Register for Youtube.
  momoAdapter.paywithVisa(visaPayment)

  return (<><div>Adapter Pattern</div></>)
}