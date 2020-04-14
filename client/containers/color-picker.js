import {COLORS, GUTTER, LAYOUT} from 'constants'
import React from 'react'
import AnimatedLinearGradient from 'react-native-animated-linear-gradient'
import styled from 'styled-components/native'

const ColorPickerContainer = styled.View`
  top: 0;
  height: ${100 - LAYOUT.BODY_WIDTH_PERCENT + GUTTER / 3}%;
  left: 0;
  position: absolute;
  right: 0;
`

export default () => {
  return (
    <ColorPickerContainer>
      <AnimatedLinearGradient
        customColors={[COLORS.RED, COLORS.BLUE, COLORS.GREEN, COLORS.YELLOW]}
        speed={3000}
      />
    </ColorPickerContainer>
  )
}
