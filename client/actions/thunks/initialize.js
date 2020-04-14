import {
  addToast,
  setConnected,
  setLoading
} from 'actions'
import {TOAST} from 'constants'
import {Client} from 'models'

export default () => async (dispatch, getState) => {
  const {initialized} = getState()

  if (initialized) {
    return
  }

  await dispatch(setLoading(true))

  try {
    const client = await Client.createClientContext()
    // const bridge = await client.getBridge()

    // dispatch(setConnected(bridge.isConnected()))

    // const colors = await client.getColors()
    // const lights = await client.getLights()
  } catch ({message}) {
    await dispatch(addToast(message, TOAST.ALERT))
  } finally {
    setTimeout(async () => {
      await dispatch(setLoading(false))
    }, 5000)
  }
}
