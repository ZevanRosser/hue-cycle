import {TOAST} from 'constants'
import {Client} from 'models'
import setInitialized from '../set-initialiized'
import setLoading from '../set-loading'
import addToast from './add-toast'

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
      dispatch(setInitialized(true))
    }, 5000)
  }
}
