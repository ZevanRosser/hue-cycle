import {BODY_HEIGHT_PERCENT, GUTTER} from 'constants'
import React from 'react'
import AnimatedLinearGradient from 'react-native-animated-linear-gradient'
import {withState} from 'state'
import styled from 'styled-components/native'

const ColorPickerContainer = styled.View`
  top: 0;
  height: ${100 - BODY_HEIGHT_PERCENT + GUTTER / 3}%;
  left: 0;
  position: absolute;
  right: 0;
`

export default () => {
  const {colors = []} = withState()

  const selectedColors = colors
    .filter(color => color.selected)
    .map(({color}) => color)

  return (
    <ColorPickerContainer>
      <AnimatedLinearGradient customColors={selectedColors} speed={3000} />
    </ColorPickerContainer>
  )
}
