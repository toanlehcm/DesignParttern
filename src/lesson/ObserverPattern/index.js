class Observer {
  constructor(name) {
    this.namePick = name;
  }

  updateStatus(location) {
    this.gotoHelp(location)
  }

  gotoHelp(location) {
    console.log('gotoHelp', this.namePick, JSON.stringify(location));
  }
}

class Subject {
  constructor() {
    this.observerList = []
  }

  // How many people listen to the request to push into this array.
  addObserver(observer) {
    this.observerList.push(observer)
  }

  notify(location) {
    this.observerList.forEach(observer => observer.updateStatus(location))
  }
}

export default function ObserverPattern() {
  const subject = new Subject()

  // Your pick
  const riki = new Observer('riki')
  const sniper = new Observer('sniper')

  // Add riki and sniper to the team.
  subject.addObserver(riki)
  subject.addObserver(sniper)

  // Push location to team
  subject.notify({ long: 1213, lat: 345 })

  return (
    <>
      <div>Observer Pattern</div>
    </>
  );
}
