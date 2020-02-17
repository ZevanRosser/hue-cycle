import {Headline, Section} from 'components'
import {ANIMATION_TIMINGS, COLORS, GUTTER} from 'constants'
import React, {useEffect, useState} from 'react'
import {Animated, Dimensions, Easing} from 'react-native'
import {withState} from 'state'
import styled from 'styled-components/native'

const StyledScrollView = styled(props => <Animated.ScrollView {...props} />)`
  background-color: ${COLORS.DARK_GRAY};
  border-top-left-radius: ${GUTTER / 3};
  border-top-right-radius: ${GUTTER / 3};
  bottom: 0;
  height: 62%;
  left: 0;
  position: absolute;
  right: 0;
`

const contentContainerStyle = {
  padding: GUTTER / 2,
  paddingTop: GUTTER
}

export default () => {
  const {loading} = withState()
  const [slideUpAnim] = useState(new Animated.Value(0))
  const {height} = Dimensions.get('window')

  useEffect(() => {
    if (loading) {
      return
    }

    Animated.timing(slideUpAnim, {
      toValue: 1,
      duration: ANIMATION_TIMINGS.SLOW,
      easing: Easing.inOut(Easing.cubic),
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
              outputRange: [height * 0.62, 0]
            })
          }
        ]
      }}>
      <Section>
        <Headline>Colors</Headline>
      </Section>
      <Section>
        <Headline>Lights</Headline>
      </Section>
      <Section>
        <Headline>Behavior</Headline>
      </Section>
    </StyledScrollView>
  )
}
