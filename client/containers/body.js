import {ANIMATION_TIMINGS, COLORS, GUTTER, LAYOUT} from 'constants'
import React, {useEffect, useState} from 'react'
import {Animated, Easing} from 'react-native'
import {withState} from 'state'
import styled from 'styled-components/native'

const StyledScrollView = styled(props => <Animated.ScrollView {...props} />)`
  background-color: ${COLORS.DARK_GRAY};
  border-top-left-radius: ${GUTTER / 3}px;
  border-top-right-radius: ${GUTTER / 3}px;
  bottom: 0;
  height: 62%;
  left: 0;
  position: absolute;
  right: 0;
`

const contentContainerStyle = {
  padding: GUTTER / 2
}

export default ({children}) => {
  const {loading} = withState()
  const [slideUpAnim] = useState(new Animated.Value(0))

  useEffect(() => {
    if (loading) {
      return
    }

    Animated.timing(slideUpAnim, {
      toValue: 1,
      duration: ANIMATION_TIMINGS.SLOW,
      easing: Easing.elastic(1),
      useNativeDriver: true
    }).start()
  }, [loading])

  return (
    <StyledScrollView
      contentContainerStyle={contentContainerStyle}
      contentInsetAdjustmentBehavior="automatic"
      indicatorStyle="white"
      style={{
        opacity: slideUpAnim,
        transform: [
          {
            translateY: slideUpAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [LAYOUT.HEIGHT * 0.25, 0]
            })
          }
        ]
      }}>
      {children}
    </StyledScrollView>
  )
}
