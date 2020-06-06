import {initialize, setLoading} from 'actions'
import {Headline, Section} from 'components'
import {Body, ColorsPreview, ColorsSelector, Splash, Toasts} from 'containers'
import React, {useEffect} from 'react'
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
      <ColorsPreview />
      <Body>
        <Section>
          <Headline>Colors</Headline>
          <ColorsSelector />
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
