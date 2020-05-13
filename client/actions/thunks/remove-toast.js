import {setToasts} from 'actions'

export default toastId => (dispatch, getState) =>
  dispatch(setToasts([...getState().toasts.filter(({id}) => id !== toastId)]))
