import {TYPES} from 'actions'

export default (payload = []) => ({
  type: TYPES.SET_COLORS,
  payload
})
