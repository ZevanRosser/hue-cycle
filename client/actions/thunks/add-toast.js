import {setToasts} from 'actions'
import uuid from 'uuid'

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
