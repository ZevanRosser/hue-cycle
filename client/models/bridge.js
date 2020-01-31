export default class Bridge {
  id = null
  ip = null

  constructor({id, ip}) {
    this.id = id
    this.ip = ip
  }

  async isConnected() {
    return Boolean(this.id)
  }
}
