//  Create service Car.
class Car {
  constructor({ name = 'Ford', door = 4, price = '10VND', customerInfo = {} }) {
    this.name = name
    this.door = door
    this.price = price
    this.customerInfo = customerInfo
  }
}

// Create service Logistics.
class ServiceLogistics {
  transportCLass = Car
  get
}

export default function FactoryMethodPattern() {

  return (<><div>Factory Method Pattern</div></>)
}