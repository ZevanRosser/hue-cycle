import MaskedView from '@react-native-community/masked-view'
import {ANIMATION_TIMINGS} from 'constants'
import React, {useEffect, useState} from 'react'
import {Animated} from 'react-native'
import AnimatedLinearGradient, {
  presetColors
} from 'react-native-animated-linear-gradient'
import styled from 'styled-components/native'

const SplashContainer = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`

const StyledImage = styled(props => <Animated.Image {...props} />)`
  height: 100%;
  width: 100%;
`

const StyledMaskedView = styled(props => <MaskedView {...props} />)`
  height: 105px;
  width: 60px;
`

const MaskElement = () => {
  const [fadeAnim] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: ANIMATION_TIMINGS.MEDIUM
    }).start()
  }, [])

  return (
    <StyledImage
      source={require('assets/light-icon.png')}
      style={{opacity: fadeAnim}}
    />
  )
}

export default () => (
  <SplashContainer>
    <StyledMaskedView maskElement={<MaskElement />}>
      <AnimatedLinearGradient
        customColors={presetColors.instagram}
        speed={750}
      />
    </StyledMaskedView>
  </SplashContainer>
)
