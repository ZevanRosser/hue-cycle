import uuid from 'uuid'
import setToasts from '../set-toasts'

export default (message, type) => (dispatch, getState) =>
  dispatch(
    setToasts([
      ...getState().toasts,
      {
        message,
        type,
        id: uuid.v4()
      }
    ])
  )
