class Order {
  constructor(userID) {
    this.userID = userID
    this.timeOrder = Date.now()
    this.products = []
  }
}

class OrderManager {
  constructor() {
    this.order = null
  }

  createOrder(userID) {
    this.order = new Order(userID)
    return this.order
  }

  addProduct(product) {
    this.order.products.push(product)
  }

  getOrder() {
    return this.order
  }

  isValid() {
    return !!this.order.products.length
  }

  sendOrder() {
    if (this.isValid()) {
      this.orderSendMail = new SendMailOrder()
      return this.orderSendMail.sendMail(this.order)
    }

    return
  }
}

class SendMailOrder {
  sendMail(order) {
    // console.log('send success: ', order);
    return 1
  }
}

export default function SInSOLID() {
  const orderManagerObj = new OrderManager()
  orderManagerObj.createOrder('userID-1001')
  orderManagerObj.addProduct({ productID: 101, quantity: 2, price: 1000, unit: 'USD' })
  // console.log('orderManagerObj.getOrder()', orderManagerObj.getOrder());
  // console.log('orderManagerObj.sendOrder()', orderManagerObj.sendOrder());

  return (
    <>
      <div>S In SOLID</div>
    </>
  )
}