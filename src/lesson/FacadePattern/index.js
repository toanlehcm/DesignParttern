class Discount {
  calc(value) {
    return value * 0.9
  }
}

class Shipping {
  calc() {
    return 5
  }
}

class Fees {
  calc(value) {
    return value * 1.05
  }
}

class ShopeeFacadePattern {
  constructor() {
    this.discount = new Discount()
    this.shipping = new Shipping()
    this.fees = new Fees()
  }

  calc(price) {
    price = this.discount.calc(price)
    console.log('discount', price);

    price = this.fees.calc(price)
    console.log('fees', price);

    price += this.shipping.calc()
    console.log('shipping', price);

    return price
  }
}

export default function FacadePattern() {
  function buy(price) {
    const shopee = new ShopeeFacadePattern()
    const total = shopee.calc(price)
    console.log('total', total);

    return total
  }

  return (
    <>
      <div>FacadePattern</div>
      <div>Total: {buy(120000)}</div>
    </>

  )
}