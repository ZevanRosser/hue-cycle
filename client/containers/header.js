import {
  HeaderContainer,
  HeaderLampBackground,
  HeaderMaskedView,
  Lamp
} from 'components'
import {COLORS, LAYOUT} from 'constants'
import React from 'react'
import {Animated} from 'react-native'
import AnimatedLinearGradient from 'react-native-animated-linear-gradient'
import {withState} from 'state'
import styled from 'styled-components/native'

const LightContainer = styled(props => <Animated.View {...props} />)`
  align-items: center;
  flex: 1;
  justify-content: center;
  transform: translateY(${LAYOUT.HEIGHT * -0.25}px);
`

export default () => {
  const {interactable} = withState()

  return (
    <HeaderContainer
      style={{
        opacity: Number(interactable)
      }}>
      <AnimatedLinearGradient
        customColors={[COLORS.BLACK, COLORS.BLACK]}
        speed={2000}>
        <LightContainer>
          <HeaderMaskedView maskElement={<Lamp />}>
            <HeaderLampBackground />
          </HeaderMaskedView>
        </LightContainer>
      </AnimatedLinearGradient>
    </HeaderContainer>
  )
}
