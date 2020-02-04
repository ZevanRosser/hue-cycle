import {COLORS} from 'constants'
import React from 'react'
import {iOSUIKit} from 'react-native-typography'
import styled from 'styled-components/native'

const HeadlineText = styled.Text`
  ${iOSUIKit.title3Object};
  color: ${COLORS.WHITE};
`

export default ({children}) => <HeadlineText>{children}</HeadlineText>
