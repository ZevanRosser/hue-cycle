import MaskedView from '@react-native-community/masked-view'
import {Light} from 'components'
import {ANIMATION_TIMINGS, COLORS} from 'constants'
import React, {useEffect, useState} from 'react'
import {Animated, Dimensions, Easing} from 'react-native'
import AnimatedLinearGradient, {
  presetColors
} from 'react-native-animated-linear-gradient'
import {withState} from 'state'
import styled from 'styled-components/native'

const HeaderContainer = styled(props => <Animated.View {...props} />)`
  align-items: center;
  height: 30%;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`

const LightBackground = styled(props => <Animated.View {...props} />)`
  flex: 1;
  background-color: ${COLORS.GRAY};
`

const LightContainer = styled(props => <Animated.View {...props} />)`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const StyledMaskedView = styled(props => <MaskedView {...props} />)`
  height: 105px;
  width: 60px;
`

export default () => {
  const {loading} = withState()
  const [lightFadeAnim] = useState(new Animated.Value(0))
  const [slideUpAnim] = useState(new Animated.Value(0))
  const [splash, setSplash] = useState(true)
  const {height} = Dimensions.get('window')

  useEffect(() => {
    Animated.timing(lightFadeAnim, {
      toValue: 1,
      duration: ANIMATION_TIMINGS.LONG
    }).start()
  })

  useEffect(() => {
    if (loading) {
      return
    }

    Animated.timing(slideUpAnim, {
      toValue: 1,
      duration: ANIMATION_TIMINGS.SLOW,
      easing: Easing.inOut(Easing.cubic),
      useNativeDriver: true
    }).start(() => setSplash(false))
  }, [loading])

  if (splash) {
    return (
      <HeaderContainer
        style={{
          transform: [
            {
              translateY: slideUpAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [height * 0.35, 0]
              })
            }
          ]
        }}>
        <StyledMaskedView
          maskElement={<Light style={{opacity: lightFadeAnim}} />}>
          <AnimatedLinearGradient
            customColors={presetColors.instagram}
            speed={750}
          />
          <LightBackground style={{opacity: slideUpAnim}} />
        </StyledMaskedView>
      </HeaderContainer>
    )
  }

  return (
    <HeaderContainer>
      <AnimatedLinearGradient
        customColors={presetColors.instagram}
        speed={2000}>
        <LightContainer style={{opacity: lightFadeAnim}}>
          <StyledMaskedView maskElement={<Light />}>
            <LightBackground />
          </StyledMaskedView>
        </LightContainer>
      </AnimatedLinearGradient>
    </HeaderContainer>
  )
}
