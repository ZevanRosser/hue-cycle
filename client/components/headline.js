import {COLORS, FONT_FAMILY, FONT_SIZE, GUTTER} from 'constants'
import React from 'react'
import styled from 'styled-components/native'

const HeadlineText = styled.Text`
  color: ${COLORS.WHITE};
  font-family: ${FONT_FAMILY};
  font-size: ${FONT_SIZE.MEDIUM}px;
  font-weight: bold;
  margin-bottom: ${GUTTER / 2}px;
`

export default ({children}) => <HeadlineText>{children}</HeadlineText>
