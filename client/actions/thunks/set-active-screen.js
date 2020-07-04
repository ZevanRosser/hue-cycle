import setNavigation from '../set-navigation'

export default activeScreen => (dispatch, getState) =>
  dispatch(
    setNavigation({
      activeScreen,
      previousScreen: getState().navigation.activeScreen
    })
  )
