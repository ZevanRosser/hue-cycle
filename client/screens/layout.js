import {initialize, setLoading} from 'actions'
import {Headline, Section} from 'components'
import {Body, ColorPicker, Splash, Toasts} from 'containers'
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
      <Splash onAnimationComplete={() => dispatch(setLoading(true))} />
      <ColorPicker />
      <Body>
        <Section>
          <Headline>Colors</Headline>
        </Section>
        <Section>
          <Headline>Lights</Headline>
        </Section>
        <Section>
          <Headline>Behavior</Headline>
        </Section>
      </Body>
      <Toasts />
    </LayoutContainer>
  )
}
