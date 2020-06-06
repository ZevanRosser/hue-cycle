import {toggleColor} from 'actions'
import {Color} from 'components'
import {SPACE_AROUND_GUTTER} from 'constants'
import React from 'react'
import {withState} from 'state'
import styled from 'styled-components/native'

const ColorsSelectorContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -${SPACE_AROUND_GUTTER * 2}px;
`

export default () => {
  const {colors = [], dispatch} = withState()

  return (
    <ColorsSelectorContainer>
      {colors.map(({color, selected}) => (
        <Color
          color={color}
          key={color}
          onPress={color => dispatch(toggleColor(color))}
          selected={selected}
        />
      ))}
    </ColorsSelectorContainer>
  )
}
