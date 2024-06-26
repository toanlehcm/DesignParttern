// Without simple factory pattern.
const serviceLogistics = (cargoVolume) => {
  switch (cargoVolume) {
    case '10':
      return {
        name: 'Truck 10',
        doors: 6,
        price: '100.000 VND'
      }

    case '20':
      return {
        name: 'Truck 20',
        doors: 16,
        price: '1.000.000 VND'
      }

    default:
      break;
  }
}

// With Simple factory pattern.
class ServiceLogistics {
  constructor(doors = 6, price = '100.000 VND', name = 'Truck 10') {
    this.name = name
    this.doors = doors
    this.price = price
  }

  static getTransport = (cargoVolume) => {
    switch (cargoVolume) {
      case '10':
        return new ServiceLogistics()
      case '20':
        return new ServiceLogistics(16, '1.000.000 VND', 'Truck 20')
      default:
        break;
    }
  }
}

export default function SimpleFactoryPattern() {
  console.log('Truck 0: ', serviceLogistics('20'));
  console.log('Truck 10: ', ServiceLogistics.getTransport('10'));
  console.log('Truck 20: ', ServiceLogistics.getTransport('20'));

  return (<><div>Simple Factory Pattern</div></>)
}