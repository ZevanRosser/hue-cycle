import {
  HeaderContainer,
  HeaderLampBackground,
  HeaderMaskedView,
  Lamp
} from 'components'
import {ANIMATION_TIMINGS, COLORS, LAYOUT} from 'constants'
import React, {useEffect, useState} from 'react'
import {Animated, Easing} from 'react-native'
import AnimatedLinearGradient from 'react-native-animated-linear-gradient'
import {withState} from 'state'

const SPLASH_GRADIENT = [
  COLORS.RED,
  COLORS.YELLOW,
  COLORS.GREEN,
  COLORS.BLUE,
  COLORS.PURPLE
]

const SPLASH_POINTS = {
  start: {x: 0, y: 0.25},
  end: {x: 0.5, y: 1}
}

export default ({onAnimationComplete}) => {
  const {loading} = withState()
  const [lightFadeAnim] = useState(new Animated.Value(0))
  const [slideUpAnim] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(lightFadeAnim, {
      toValue: 1,
      duration: ANIMATION_TIMINGS.LONG
    }).start()
  }, [])

  useEffect(() => {
    if (loading) {
      return
    }

    Animated.timing(slideUpAnim, {
      toValue: 1,
      duration: ANIMATION_TIMINGS.SLOW,
      easing: Easing.elastic(1),
      useNativeDriver: true
    }).start(onAnimationComplete)
  }, [loading])

  return (
    <HeaderContainer
      style={{
        transform: [
          {
            translateY: slideUpAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, LAYOUT.HEIGHT * -0.25]
            })
          }
        ]
      }}>
      <HeaderMaskedView maskElement={<Lamp style={{opacity: lightFadeAnim}} />}>
        <AnimatedLinearGradient
          customColors={SPLASH_GRADIENT}
          points={SPLASH_POINTS}
          speed={1000}
        />
        <HeaderLampBackground style={{opacity: slideUpAnim}} />
      </HeaderMaskedView>
    </HeaderContainer>
  )
}
