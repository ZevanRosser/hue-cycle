import MaskedView from '@react-native-community/masked-view'
import {Lamp} from 'components'
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

export const HeaderContainer = styled(props => <Animated.View {...props} />)`
  align-items: center;
  height: 40%;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`

export const HeaderLightBackground = styled(props => (
  <Animated.View {...props} />
))`
  flex: 1;
  background-color: ${COLORS.LIGHT_GRAY};
`

export const HeaderMaskedView = styled(props => <MaskedView {...props} />)`
  height: ${LAYOUT.WIDTH * 0.4 * (512 / 149)}px;
  width: ${LAYOUT.WIDTH * 0.4}px;
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
            <HeaderLightBackground />
          </HeaderMaskedView>
        </LightContainer>
      </AnimatedLinearGradient>
    </HeaderContainer>
  )
}
