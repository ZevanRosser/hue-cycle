import {initialize} from 'actions'
import {Body, Header, Toasts} from 'containers'
import React, {useEffect} from 'react'
import {withState} from 'state'
import styled from 'styled-components/native'

const LayoutContainer = styled.View`
  height: 100%;
`

export default () => {
  const {initialized, dispatch} = withState()

  useEffect(() => {
    dispatch(initialize())
  }, [initialized])

  return (
    <LayoutContainer>
      <Header />
      <Body />
      <Toasts />
    </LayoutContainer>
  )
}
