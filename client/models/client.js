import {getBridge, login} from 'api'
import {ACCESS_TOKEN, CLIENT_ID, CLIENT_SECRET} from 'constants'
import {Bridge} from 'models'
import {storage} from 'utils'
import uuid from 'uuid'

export default class Client {
  accessToken = null

  static async clientContext() {
    const accessToken = await storage.get(ACCESS_TOKEN)

    return new Client(accessToken)
  }

  static async createClientContext() {
    const clientId = (await storage.get(CLIENT_ID)) || uuid.v4()
    const clientSecret = (await storage.get(CLIENT_SECRET)) || uuid.v4()

    return await Client.initializeClientContext(clientId, clientSecret)
  }

  static async initializeClientContext(clientId, clientSecret) {
    const accessToken = await login(clientId, clientSecret)

    await storage.set(CLIENT_ID, clientId)
    await storage.set(CLIENT_SECRET, clientSecret)
    await storage.set(ACCESS_TOKEN, accessToken)

    return await Client.clientContext()
  }

  constructor(accessToken) {
    this.accessToken = accessToken
  }

  async getBridge() {
    const bridge = await getBridge(this.accessToken)

    return new Bridge({...bridge})
  }
}
