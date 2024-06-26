// Show information of player.
class FifaOnlinePlayer {
  constructor(builder) {
    this.name = builder.name;
    this.age = builder.age;
    this.nationality = builder.nationality;
    this.position = builder.position;
    this.team = builder.team;
    this.stats = builder.stats;
  }

  toString() {
    let player = 'Player: \n';
    player += `- Name: S{this.name}\n`;
    player += `- Age: ${this.age}\n`;
    player += `- Nationality: ${this.nationality}\n`;
    player += `- Position: ${this.position}\n`;
    player += `- Team: ${this.team}\n`;
    player += `- Stats: ${JSON.stringify(this.stats)}\n`;
    return player;
  }
}

// Is a construction object that helps create an object for fifaOnlinePlayer with different representations of each attribute.
class FifaOnlinePlayerBuilder {
  constructor() {
    this.name = ''
    this.age = 0;
    this.nationality = '';
    this.position = '';
    this.team = '';
    this.stats = {};
  }

  withName(name) {
    this.name = name;
    return this;
  }

  withAge(age) {
    this.age = age
    return this
  }

  withNationality(nationality) {
    this.nationality = nationality
    return this
  }

  withPosition(position) {
    this.position = position
    return this
  }

  withTeam(team) {
    this.team = team
    return this
  }

  withStats(stats) {
    this.stats = stats
    return this
  }

  build() {
    return new FifaOnlinePlayer(this)
  }
}

export default function BuilderPattern() {
  const newBuilder = new FifaOnlinePlayerBuilder()

  const cr7 = newBuilder
    .withName('Cr7')
    .withAge(38)
    .withNationality('Portugal')
    .withTeam('Al')
    .withPosition('FW')
    .withStats({ goals: 15, assists: 2 })
    .build()

  console.log('cr7', cr7.toString());

  const m10 = newBuilder
    .withName('m10')
    .withAge(38)
    .withNationality('Portugal')
    .withTeam('Al')
    .withPosition('FW')
    .withStats({ goals: 15, assists: 2 })
    .build()

  console.log('m10', m10.toString());

  return (
    <>
      <div>Builder Pattern</div>
    </>
  )
}