function InitOrder() {
  const handleInitOrder = (userIDNumber) => {
    return {
      userID: userIDNumber,
      timeOrder: Date.now(),
      products: []
    }
  }

  return { handleInitOrder }
}

function OrderManager() {
  var order = null

  const createOrder = (userID) => {
    order = InitOrder().handleInitOrder(userID)
    return order
  }

  const addProduct = (product) => {
    order.products.push(product)
  }

  const getOrder = () => {
    return order
  }

  const isValid = () => {
    return !!order.products.length
  }

  const sendOrder = () => {
    if (isValid()) {
      const orderSendMail = SendMailOrder()
      return orderSendMail.sendMail(order)
    }

    return
  }

  return {
    createOrder,
    addProduct,
    getOrder,
    sendOrder
  }
}

function SendMailOrder() {
  const sendMail = (order) => {
    console.log('send success: *', order);
    return 1
  }

  return { sendMail }
}

export default function SInSOLIDReact() {
  const orderManagerObj = OrderManager()
  orderManagerObj.createOrder('userID-1001')
  orderManagerObj.addProduct({ productID: 101, quantity: 2, price: 1000, unit: 'USD' })
  console.log('orderManagerObj.getOrder() *', orderManagerObj.getOrder());
  console.log('orderManagerObj.sendOrder() *', orderManagerObj.sendOrder());

  return (
    <>
      <div>S In SOLID react</div>
    </>
  )
}