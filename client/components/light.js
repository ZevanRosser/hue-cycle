import React from 'react'
import {Animated} from 'react-native'
import styled from 'styled-components/native'

const StyledImage = styled(props => <Animated.Image {...props} />)`
  height: 100%;
  width: 100%;
`

export default ({style}) => (
  <StyledImage source={require('assets/light-icon2.png')} style={style} />
)
