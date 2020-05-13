import {COLORS, COLOR_DOT_SIZE, SPACE_AROUND_GUTTER} from 'constants'
import React from 'react'
import {TouchableWithoutFeedback} from 'react-native'
import styled from 'styled-components/native'

const ColorContainer = styled.View`
  background-color: ${({selected}) => (selected ? COLORS.GRAY : 'transparent')};
  border-radius: ${COLOR_DOT_SIZE / 2}px;
  width: ${COLOR_DOT_SIZE}px;
  height: ${COLOR_DOT_SIZE}px;
  overflow: hidden;
  padding: ${SPACE_AROUND_GUTTER}px;
  margin: ${SPACE_AROUND_GUTTER}px;
`

const Color = styled.View`
  background-color: ${({color}) => color};
  border-radius: ${COLOR_DOT_SIZE / 2}px;
  border-width: ${SPACE_AROUND_GUTTER}px;
  border-color: ${COLORS.BLACK};
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export default ({color, onPress, selected}) => (
  <TouchableWithoutFeedback onPress={() => onPress(color)}>
    <ColorContainer selected={selected}>
      <Color color={color} />
    </ColorContainer>
  </TouchableWithoutFeedback>
)
