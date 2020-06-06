import {addToast, setConnected, setLoading, setInitialized} from 'actions'
import {TOAST} from 'constants'
import {Client} from 'models'

export default () => async dispatch => {
  dispatch(setLoading(true))

  try {
    const client = await Client.createClientContext()
    // const bridge = await client.getBridge()
    // dispatch(setConnected(bridge.isConnected()))
    // const lights = await client.getLights()
  } catch ({message}) {
    await dispatch(addToast(message, TOAST.ALERT))
  } finally {
    setTimeout(async () => {
      await dispatch(setInitialized(true))
    }, 2000)
  }
}
