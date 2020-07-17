import ReactNativeHapticFeedback from 'react-native-haptic-feedback'
import setScene from './set-scene'

export default (sceneId, colorToToggle) => async (dispatch, getState) => {
  const scenes = getState().scenes
  const {selectedColors, ...scene} = scenes.find(({id}) => id === sceneId)

  ReactNativeHapticFeedback.trigger('impactLight')

  await dispatch(
    setScene(sceneId, {
      ...scene,
      selectedColors: selectedColors.includes(colorToToggle)
        ? selectedColors.filter(color => color !== colorToToggle)
        : [...selectedColors, colorToToggle]
    })
  )
}
