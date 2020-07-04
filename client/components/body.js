import {GUTTER, ZINDEX} from 'constants'
import React from 'react'
import {Animated} from 'react-native'
import styled from 'styled-components/native'

const BodyContainer = styled(props => <Animated.View {...props} />)`
  flex: 1;
  padding: ${GUTTER / 2}px;
  z-index: ${ZINDEX.BODY};
`

export default ({children, style}) => (
  <BodyContainer style={style}>{children}</BodyContainer>
)
