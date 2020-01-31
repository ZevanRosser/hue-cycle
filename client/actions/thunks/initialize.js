import {addToast, setLoading} from 'actions'
import {Client} from 'models'

export default () => async dispatch => {
  await dispatch(setLoading(true))

  try {
    const client = await Client.createClientContext()
    const bridge = await client.getBridge()

    if (!bridge.isConnected()) {
      // await dispatch(setConfigured(false))

      return
    }

    // const colors = await client.getColors()
    // const lights = await client.getLights()
  } catch ({message}) {
    dispatch(addToast(message, 'alert'))

    return
  }

  setTimeout(async () => {
    await dispatch(setLoading(false))
  }, 5000)
}
