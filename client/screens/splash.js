import {AnimatedGradient, Light} from 'components'
import {ANIMATION_TIMINGS, COLORS, ZINDEX} from 'constants'
import React, {useEffect, useState} from 'react'
import {Animated} from 'react-native'
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

const SplashContainer = styled(props => <Animated.View {...props} />)`
  align-items: center;
  background-color: ${COLORS.BLACK};
  bottom: 0;
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
  height: 123px;
  width: 70px;
`

export default ({onAnimationComplete}) => {
  const {initialized} = withState()
  const [anim] = useState(new Animated.Value(1))

  useEffect(() => {
    if (!initialized) {
      return
    }

    Animated.timing(anim, {
      toValue: 0,
      duration: ANIMATION_TIMINGS.SLOW,
      useNativeDriver: true
    }).start(onAnimationComplete)
  }, [initialized])

  return (
    <SplashContainer style={{opacity: anim}}>
      <LightMaskedView maskElement={<Light />}>
        <AnimatedGradient colors={SPLASH_GRADIENT} speed={1000} />
      </LightMaskedView>
    </SplashContainer>
  )
}
