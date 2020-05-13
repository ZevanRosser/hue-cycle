import {getBridge, login} from 'api'
import {STORAGE_KEYS} from 'constants'
import {Bridge} from 'models'
import {storage} from 'utils'
import uuid from 'uuid'

export default class Client {
  accessToken = null

  static async clientContext() {
    const accessToken = await storage.get(STORAGE_KEYS.ACCESS_TOKEN)

    return new Client(accessToken)
  }

  static async createClientContext() {
    const clientId = (await storage.get(STORAGE_KEYS.CLIENT_ID)) || uuid.v4()
    const clientSecret =
      (await storage.get(STORAGE_KEYS.CLIENT_SECRET)) || uuid.v4()

    return await Client.initializeClientContext(clientId, clientSecret)
  }

  static async initializeClientContext(clientId, clientSecret) {
    const accessToken = await login(clientId, clientSecret)

    await storage.set(STORAGE_KEYS.CLIENT_ID, clientId)
    await storage.set(STORAGE_KEYS.CLIENT_SECRET, clientSecret)
    await storage.set(STORAGE_KEYS.ACCESS_TOKEN, accessToken)

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
