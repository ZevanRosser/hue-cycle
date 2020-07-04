import {ZINDEX} from 'constants'
import React from 'react'
import {Animated} from 'react-native'
import styled from 'styled-components/native'

const HeaderContainer = styled(props => <Animated.View {...props} />)`
  flex: 1;
  z-index: ${ZINDEX.HEADER};
`

export default ({children, style}) => (
  <HeaderContainer style={style}>{children}</HeaderContainer>
)
