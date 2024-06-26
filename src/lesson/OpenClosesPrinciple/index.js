// class Socket {
//   constructor(tivi, fridge) {
//     this.tivi = tivi
//     this.fridge = fridge
//   }

//   activate() {
//     console.log('connect to socket');
//     this.tivi.connect()
//     this.fridge.connect()
//   }
// }

class Socket {
  constructor() {
    this.devices = []
  }

  addDevices(device) {
    this.devices.push(device)
  }

  activate() {
    console.log('connect to socket');
    this.devices.forEach(device => {
      device.connect()
    })
  }
}

class Tivi {
  connect() {
    console.log('tivi connect');
  }
}

class Fridge {
  connect() {
    console.log('Fridge connect');
  }
}

class Fan {
  connect() {
    console.log('Fan connect');
  }
}

export default function OpenClosesPrinciple() {
  // const socket = new Socket(new Tivi(), new Fridge())
  const socket = new Socket()
  socket.addDevices(new Tivi())
  socket.addDevices(new Fridge())
  socket.addDevices(new Fan())
  socket.activate()

  return (<><div>Open Closes Principle</div></>)
}