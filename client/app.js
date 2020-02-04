import {COLORS} from 'constants'
import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
import {Layout} from 'screens'
import {StateProvider} from 'state'
import styled from 'styled-components/native'

const StyledSafeAreaView = styled(props => <SafeAreaView {...props} />)`
  background-color: ${COLORS.BLACK};
  flex: 1;
`

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
