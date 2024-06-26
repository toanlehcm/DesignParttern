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
  transportClass = Car
  getTransport = (customerInfo) => {
    return new this.transportClass(customerInfo)
  }
}

// Cách 1:
class Truck {
  constructor({ name = 'Container', door = 16, price = '100.000 VND', customerInfo = {} }) {
    this.name = name
    this.door = door
    this.price = price
    this.customerInfo = customerInfo
  }
}

// Cách 2: 
class TruckService extends ServiceLogistics {
  transportClass = Truck
}

export default function FactoryMethodPattern() {
  // order for customer by Car.
  const carService = new ServiceLogistics()
  console.log('CarService: ', carService.getTransport({ customerInfo: { name: 'Car', cargoVolume: '100kg' } }));

  carService.transportClass = Truck
  console.log('TruckService: ', carService.getTransport({ customerInfo: { name: 'Truck', cargoVolume: '1000kg' } }));

  const truckService = new TruckService()
  console.log('TruckService Class: ', carService.getTransport({ customerInfo: { name: 'Truck class', cargoVolume: '10.000kg' } }));

  return (<><div>Factory Method Pattern</div></>)
}