import {Animated, Easing} from 'react-native'
import {ANIMATION_TIMINGS, COLORS, ZINDEX} from 'constants'
import {withState} from 'state'
import LottieView from 'lottie-react-native'
import MaskedView from '@react-native-community/masked-view'
import React, {useEffect, useState} from 'react'
import styled from 'styled-components/native'

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
  const [anim] = useState(new Animated.Value(0))
  const [fadeAnim] = useState(new Animated.Value(1))

  useEffect(() => {
    Animated.loop(
      Animated.timing(anim, {
        toValue: 1,
        duration: ANIMATION_TIMINGS.XSLOW,
        easing: Easing.linear,
        useNativeDriver: true
      }),
      Animated.timing(anim, {
        toValue: 0,
        duration: ANIMATION_TIMINGS.XSLOW,
        easing: Easing.linear,
        useNativeDriver: true
      })
    ).start()
  }, [])

  useEffect(() => {
    if (!initialized) {
      return
    }

    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: ANIMATION_TIMINGS.SLOW,
      useNativeDriver: true
    }).start(onAnimationComplete)
  }, [initialized])

  return (
    <SplashContainer style={{opacity: fadeAnim}}>
      <LottieView source={require('lottie/splash.json')} progress={anim} />
    </SplashContainer>
  )
}
