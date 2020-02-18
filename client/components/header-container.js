import React from 'react'
import {Animated} from 'react-native'
import styled from 'styled-components/native'

export default styled(props => <Animated.View {...props} />)`
  align-items: center;
  height: 40%;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`
