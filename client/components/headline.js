import {COLORS, FONT_FAMILY} from 'constants'
import React from 'react'
import styled from 'styled-components/native'

const HeadlineText = styled.Text`
  color: ${COLORS.WHITE};
  font-family: ${FONT_FAMILY};
  font-size: 18px;
  font-weight: bold;
`

export default ({children}) => <HeadlineText>{children}</HeadlineText>
