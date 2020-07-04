import {SCENE_NAME_MAX_LENGTH} from 'constants'
import ReactNativeHapticFeedback from 'react-native-haptic-feedback'
import setScene from './set-scene'

export default (sceneId, name) => async (dispatch, getState) => {
  const scenes = getState().scenes
  const scene = scenes.find(({id}) => id === sceneId)

  if (name.length >= SCENE_NAME_MAX_LENGTH) {
    ReactNativeHapticFeedback.trigger('notificationError')

    return
  }

  await dispatch(
    setScene(sceneId, {
      ...scene,
      name
    })
  )
}
