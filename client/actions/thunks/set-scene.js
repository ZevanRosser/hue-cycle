import setScenes from '../set-scenes'

export default (sceneId, newScene) => async (dispatch, getState) => {
  const scenes = getState().scenes

  await dispatch(
    setScenes(
      scenes.map(scene => (scene.id === sceneId ? {...newScene} : {...scene}))
    )
  )
}
