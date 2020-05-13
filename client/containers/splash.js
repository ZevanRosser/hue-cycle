import {Light} from 'components'
import {ANIMATION_TIMINGS, COLORS, ZINDEX} from 'constants'
import React, {useEffect, useState} from 'react'
import {Animated} from 'react-native'
import AnimatedLinearGradient from 'react-native-animated-linear-gradient'
import {withState} from 'state'
import styled from 'styled-components/native'
import MaskedView from '@react-native-community/masked-view'

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

const SplashContainer = styled(props => <Animated.View {...props} />)`
  align-items: center;
  background-color: ${COLORS.BLACK};
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: ${ZINDEX.SPLASH};
`

const LightMaskedView = styled(props => <MaskedView {...props} />)`
  align-items: center;
  height: 123px;
  justify-content: center;
  width: 70px;
`

export default ({onAnimationComplete}) => {
  const {loading} = withState()
  const [anim] = useState(new Animated.Value(1))
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    Animated.timing(anim, {
      toValue: 1,
      duration: ANIMATION_TIMINGS.MEDIUM
    }).start()
  }, [])

  useEffect(() => {
    if (loading) {
      return
    }

    Animated.timing(anim, {
      toValue: 0,
      duration: ANIMATION_TIMINGS.SLOW,
      useNativeDriver: true
    }).start(() => {
      setIsVisible(false)
      onAnimationComplete()
    })
  }, [loading])

  if (!isVisible) {
    return null
  }

  return (
    <SplashContainer style={{opacity: anim}}>
      <LightMaskedView maskElement={<Light />}>
        <AnimatedLinearGradient
          customColors={SPLASH_GRADIENT}
          points={SPLASH_POINTS}
          speed={1000}
        />
      </LightMaskedView>
    </SplashContainer>
  )
}
