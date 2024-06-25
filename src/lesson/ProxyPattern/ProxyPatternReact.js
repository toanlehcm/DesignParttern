function leader() {
  const receiveRequest = (offer) => {
    console.log('result *: ', offer);
    return offer;
  }

  return { receiveRequest }
}

function secretary() {
  const leaderObj = leader();


  const receiveRequest = (offer) => {
    // date...
    return leaderObj.receiveRequest(offer)
  }

  return { receiveRequest }
}

function developer(offer) {
  const applyFor = (target) => {
    return target.receiveRequest(offer)
  }

  return { applyFor }
}

export default function ProxyPatternReact() {
  const handleOffer = () => {
    const dev = developer('upto 10k')
    return dev.applyFor(secretary());
  }

  return (
    <>
      <div>Proxy Pattern React</div>
      <div>Result: {handleOffer()}</div>
    </>
  )
}