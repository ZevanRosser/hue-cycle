import {COLORS} from 'constants'
import React from 'react'
import {StatusBar} from 'react-native'
import {StateProvider} from 'state'
import styled from 'styled-components/native'
import Layout from './layout'

const AppContainer = styled.View`
  background-color: ${COLORS.BLACK};
  flex: 1;
`

export default () => (
  <StateProvider>
    <StatusBar barStyle="light-content" />
    <AppContainer>
      <Layout />
    </AppContainer>
  </StateProvider>
)
