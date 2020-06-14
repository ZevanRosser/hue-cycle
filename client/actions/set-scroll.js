import {TYPES} from 'actions'

export default (payload = 0) => ({
  type: TYPES.SET_SCROLL,
  payload
})
