import React from 'react'
import {Animated} from 'react-native'
import styled from 'styled-components/native'

const StyledImage = styled(props => <Animated.Image {...props} />)`
  height: 512px;
  width: 149px;
`

export default ({style}) => (
  <StyledImage source={require('assets/images/lamp.png')} style={style} />
)
