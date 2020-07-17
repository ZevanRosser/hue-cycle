import React from 'react'
import {Animated} from 'react-native'
import styled from 'styled-components/native'

const BlackLight = require('assets/images/light-black.png')
const WhiteLight = require('assets/images/light-white.png')

const StyledImage = styled(props => <Animated.Image {...props} />)`
  height: 100%;
  width: 100%;
`

export default ({style, variant = 'white'}) => (
  <StyledImage
    source={variant === 'white' ? WhiteLight : BlackLight}
    style={style}
  />
)
