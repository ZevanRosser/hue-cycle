import {setScroll} from 'actions'
import {BODY_HEIGHT_PERCENT, COLORS, GUTTER, LAYOUT} from 'constants'
import React from 'react'
import {Animated} from 'react-native'
import {withState} from 'state'
import styled from 'styled-components/native'

const StyledScrollView = styled(props => <Animated.ScrollView {...props} />)`
  background-color: ${COLORS.BLACK};
  border-top-left-radius: ${GUTTER / 3}px;
  border-top-right-radius: ${GUTTER / 3}px;
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(
    ${LAYOUT.HEIGHT * ((100 - BODY_HEIGHT_PERCENT) / 100)}px
  );
`

const contentContainerStyle = {
  padding: GUTTER / 2
}

export default ({children}) => {
  const {dispatch} = withState()

  return (
    <StyledScrollView
      contentContainerStyle={contentContainerStyle}
      contentInsetAdjustmentBehavior="automatic"
      indicatorStyle="white"
      onScroll={({nativeEvent}) =>
        dispatch(setScroll(nativeEvent.contentOffset.y))
      }
      scrollEventThrottle={16}>
      {children}
    </StyledScrollView>
  )
}
