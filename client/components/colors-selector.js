import {AddNewColor, Color} from 'components'
import {SPACE_AROUND_GUTTER} from 'constants'
import React from 'react'
import styled from 'styled-components/native'

const ColorsSelectorContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -${SPACE_AROUND_GUTTER * 2}px;
`

export default ({colors, onColorSelect}) => (
  <ColorsSelectorContainer>
    {colors.map(({color, selected}) => (
      <Color
        color={color}
        key={color}
        onPress={onColorSelect}
        selected={selected}
      />
    ))}
    <AddNewColor />
  </ColorsSelectorContainer>
)
