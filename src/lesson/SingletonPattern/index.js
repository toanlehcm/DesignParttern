class RoundRobin {
  constructor() {
    // Nếu tồn tại rồi thì trả về chính nó.
    if (RoundRobin.instance) {
      return RoundRobin.instance
    }

    // Đầu tiên sẽ vào đây và được gán bằng this.
    RoundRobin.instance = this
    this.servers = []
    this.index = 0
  }

  // Add server into list servers for load balancing.
  addServer(server) {
    this.servers.push(server)
  }

  // Returns the next server in the server list, circular style.
  getNextServer() {
    if (!this.servers.length) {
      throw new Error('No server')
    }

    const server = this.servers[this.index]

    // modulus.
    this.index = (this.index + 1) % this.servers.length
    return server
  }
}
export default function SingletonPattern() {
  const loadBalancer = new RoundRobin()
  const loadBalancer1 = new RoundRobin()
  console.log('compare', loadBalancer === loadBalancer1);

  loadBalancer.addServer('server 1')
  loadBalancer.addServer('server 2')
  loadBalancer.addServer('server 3')

  console.log(loadBalancer.getNextServer()); // server 01
  console.log(loadBalancer.getNextServer()); // server 02
  console.log(loadBalancer.getNextServer()); // server 03
  console.log(loadBalancer.getNextServer()); // server 01
  console.log(loadBalancer.getNextServer()); // server 02

  return (<><div>Singleton Pattern</div></>)
}