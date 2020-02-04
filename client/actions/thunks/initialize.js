import {addToast, setConnected, setInitialized, setLoading} from 'actions'
import {Client} from 'models'

export default () => async (dispatch, getState) => {
  const {initialized} = getState()

  if (initialized) {
    return
  }

  dispatch(setLoading(true))

  try {
    const client = await Client.createClientContext()
    // const bridge = await client.getBridge()

    // dispatch(setConnected(bridge.isConnected()))

    // const colors = await client.getColors()
    // const lights = await client.getLights()
  } catch ({message}) {
    dispatch(addToast(message, 'alert'))
  } finally {
    setTimeout(async () => {
      await dispatch(setLoading(false))
      await dispatch(setInitialized(true))
    }, 3000)
  }
}
