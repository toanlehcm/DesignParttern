import React from "react";

function Discount() {
  const calc = (value) => {
    return value * 0.9
  }

  return { calc }
}

function Shipping() {
  const calc = () => {
    return 5
  }

  return { calc }
}

function Fees() {
  const calc = (value) => {
    return value * 1.05
  }

  return { calc }
}

function ShopeeFacadePattern() {
  const discount = Discount();
  const shipping = Shipping();
  const fees = Fees();

  const calc = (price) => {
    price = discount.calc(price)
    console.log('discount *', price);

    price = fees.calc(price)
    console.log('fees *', price);

    price += shipping.calc()
    console.log('shipping *', price);

    return price
  }

  return { calc }
}

export default function FacadePatternReact() {
  const buy = (price) => {
    const shopee = ShopeeFacadePattern()
    const total = shopee.calc(price)
    console.log('total *', total);
    return total
  }
  return (
    <>
      <div>FacadePatternReact</div>
      <div>Total: {buy(120000)}</div>
    </>
  )
}