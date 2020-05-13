import {setColors} from 'actions'
import ReactNativeHapticFeedback from 'react-native-haptic-feedback'

export default colorToToggle => async (dispatch, getState) => {
  const colors = getState().colors.map(({color, selected}) => {
    return {
      color,
      selected: color === colorToToggle ? !selected : selected
    }
  })

  const selectedCount = colors.filter(({selected}) => selected).length

  // need at least 2 colors to have a gradient
  if (selectedCount < 2) {
    return
  }

  ReactNativeHapticFeedback.trigger('impactLight')
  await dispatch(setColors(colors))
}
