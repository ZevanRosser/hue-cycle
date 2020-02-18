import MaskedView from '@react-native-community/masked-view'
import {LAYOUT} from 'constants'
import React from 'react'
import styled from 'styled-components/native'

export default styled(props => <MaskedView {...props} />)`
  height: ${LAYOUT.WIDTH * 0.4 * (512 / 149)}px;
  width: ${LAYOUT.WIDTH * 0.4}px;
`
