import {COLORS, GUTTER, LAYOUT} from 'constants'
import React from 'react'
import {Animated} from 'react-native'
import styled from 'styled-components/native'

const StyledScrollView = styled(props => <Animated.ScrollView {...props} />)`
  background-color: ${COLORS.DARK_GRAY};
  border-top-left-radius: ${GUTTER / 3}px;
  border-top-right-radius: ${GUTTER / 3}px;
  bottom: 0;
  height: ${LAYOUT.BODY_WIDTH_PERCENT}%;
  left: 0;
  position: absolute;
  right: 0;
`

const contentContainerStyle = {
  padding: GUTTER / 2
}

export default ({children}) => (
  <StyledScrollView
    contentContainerStyle={contentContainerStyle}
    contentInsetAdjustmentBehavior="automatic"
    indicatorStyle="white">
    {children}
  </StyledScrollView>
)
