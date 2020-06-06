import {AnimatedGradient} from 'components'
import {BODY_HEIGHT_PERCENT, GUTTER} from 'constants'
import React from 'react'
import {withState} from 'state'
import styled from 'styled-components/native'

const ColorsPreviewContainer = styled.View`
  top: 0;
  height: 100%;
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
    <ColorsPreviewContainer>
      <AnimatedGradient colors={selectedColors} speed={3000} />
    </ColorsPreviewContainer>
  )
}
