import {initialize, setLoading} from 'actions'
import {SCREENS} from 'constants'
import {Navigation, Toasts} from 'containers'
import React, {useEffect} from 'react'
import {Scene, Splash} from 'screens'
import {withState} from 'state'
import styled from 'styled-components/native'

const LayoutContainer = styled.View`
  height: 100%;
`

export default () => {
  const {dispatch, loading} = withState()

  useEffect(() => {
    dispatch(initialize())
  }, [])

  return (
    <LayoutContainer>
      {loading && (
        <Splash onAnimationComplete={() => dispatch(setLoading(false))} />
      )}
      <Navigation.Navigator initialScreen={SCREENS.SCENE}>
        <Navigation.Screen name={SCREENS.SCENES} />
        <Navigation.Screen name={SCREENS.SCENE}>
          <Scene />
        </Navigation.Screen>
        <Navigation.Screen name={SCREENS.SETTINGS} />
        <Navigation.Screen name={SCREENS.SETUP} />
      </Navigation.Navigator>
      <Toasts />
    </LayoutContainer>
  )
}
