import {TYPES} from 'actions'

export default (payload = false) => ({
  type: TYPES.SET_INITIALIZED,
  payload
})
