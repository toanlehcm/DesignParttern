class Leader {
  receiveRequest(offer) {
    console.log('result: ', offer);
    return offer;
  }
}

class Secretary {
  constructor() {
    this.leader = new Leader()
  }

  receiveRequest(offer) {
    // date...
    return this.leader.receiveRequest(offer)
  }
}

class Developer {
  constructor(offer) {
    this.offer = offer
  }

  applyFor(target) {
    return target.receiveRequest(this.offer)
  }
}

// How to use
export default function ProxyPattern() {
  const handleOffer = () => {
    const dev = new Developer('upto 5k')
    return dev.applyFor(new Secretary());
  }

  return (
    <>
      <div>Proxy Pattern</div>
      <div>Result: {handleOffer()}</div>
    </>
  )
}