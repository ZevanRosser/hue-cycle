import setToasts from '../set-toasts'

export default toastId => (dispatch, getState) =>
  dispatch(setToasts([...getState().toasts.filter(({id}) => id !== toastId)]))
