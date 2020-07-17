import {AddNewColor, Color} from 'components'
import {COLOR_GUTTER} from 'constants'
import React from 'react'
import styled from 'styled-components/native'

const ColorsSelectorContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: -${COLOR_GUTTER * 2}px;
`

export default ({colors, onColorSelect, selectedColors}) => (
  <ColorsSelectorContainer>
    {colors.map(color => (
      <Color
        color={color}
        key={color}
        onPress={onColorSelect}
        selected={selectedColors.includes(color)}
      />
    ))}
    <AddNewColor />
  </ColorsSelectorContainer>
)
