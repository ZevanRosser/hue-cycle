import {COLORS, GUTTER} from 'constants'
import {Headline, Section} from 'components'
import React from 'react'
import {ScrollView} from 'react-native'
import styled from 'styled-components/native'

const StyledScrollView = styled(props => <ScrollView {...props} />)`
  background-color: ${COLORS.BLACK};
  border-top-left-radius: ${GUTTER / 2};
  border-top-right-radius: ${GUTTER / 2};
  border: 1px solid green;
  bottom: 0;
  height: 72%;
  left: 0;
  position: absolute;
  right: 0;
`

const contentContainerStyle = {
  padding: GUTTER / 2,
  paddingTop: GUTTER * 1.5
}

export default () => {
  return (
    <StyledScrollView
      contentContainerStyle={contentContainerStyle}
      contentInsetAdjustmentBehavior="automatic"
      indicatorStyle="white">
      <Section>
        <Headline>Colors</Headline>
      </Section>
      <Section>
        <Headline>Lights</Headline>
      </Section>
      <Section>
        <Headline>Configuration</Headline>
      </Section>
    </StyledScrollView>
  )
}
