import ReactNativeHapticFeedback from 'react-native-haptic-feedback'
import setScene from './set-scene'

export default (sceneId, colorToToggle) => async (dispatch, getState) => {
  const scenes = getState().scenes
  const scene = scenes.find(({id}) => id === sceneId)

  ReactNativeHapticFeedback.trigger('impactLight')

  await dispatch(
    setScene(sceneId, {
      ...scene,
      colors: scene.colors.map(({color, selected}) => ({
        color,
        selected: color === colorToToggle ? !selected : selected
      }))
    })
  )
}
