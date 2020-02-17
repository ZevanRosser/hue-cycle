import {TYPES} from 'actions'

export default (state, {type, payload}) => {
  switch (type) {
    case TYPES.SET_CONNECTED:
      return {
        ...state,
        connected: payload
      }
    case TYPES.SET_INITIALIZED:
      return {
        ...state,
        initialized: payload
      }
    case TYPES.SET_INTERACTABLE:
      return {
        ...state,
        interactable: payload
      }
    case TYPES.SET_LOADING:
      return {
        ...state,
        loading: payload
      }
    case TYPES.SET_TOASTS:
      return {
        ...state,
        toasts: payload
      }
    default:
      return state
  }
}
