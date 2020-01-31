import {COLORS, GUTTER} from 'constants'
import React from 'react'
import {ScrollView} from 'react-native'
import styled from 'styled-components/native'

const contentContainerStyle = {
  padding: GUTTER
}

const HeaderText = styled.Text`
  color: ${COLORS.WHITE};
`

export default () => (
  <ScrollView
    contentContainerStyle={contentContainerStyle}
    contentInsetAdjustmentBehavior="automatic"
    indicatorStyle="white">
    <HeaderText>Home</HeaderText>
  </ScrollView>
)
