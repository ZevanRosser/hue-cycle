import {COLORS} from 'constants'
import React from 'react'
import {Animated} from 'react-native'
import styled from 'styled-components/native'

export default styled(props => (
  <Animated.View {...props} />
))`
  flex: 1;
  background-color: ${COLORS.LIGHT_GRAY};
`
