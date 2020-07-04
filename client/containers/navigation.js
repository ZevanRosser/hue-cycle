import {setActiveScreen} from 'actions'
import React, {useEffect, useState} from 'react'
import {withState} from 'state'
import styled from 'styled-components/native'

const ScreenContainer = styled.View`
  flex: 1;
`

export const Navigator = ({children, initialScreen}) => {
  const {dispatch, navigation} = withState()

  useEffect(() => {
    dispatch(setActiveScreen(initialScreen))
  }, [])

  const [screens] = useState(
    children.reduce(
      (screens, screen) => ({
        ...screens,
        [screen.props.name]: screen
      }),
      {}
    )
  )

  return (
    <>
      <ScreenContainer>{screens[navigation.activeScreen]}</ScreenContainer>
    </>
  )
}

export const Screen = ({children}) => <>{children}</>
