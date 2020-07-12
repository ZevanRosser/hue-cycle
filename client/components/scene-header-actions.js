import {COLORS, GUTTER} from 'constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react'
import {Switch, TouchableWithoutFeedback} from 'react-native'
import styled from 'styled-components/native'

const BackButton = styled.View`
  align-self: flex-start;
  margin-right: auto;
`

const HeaderActionsContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding-left: ${GUTTER / 2}px;
  padding-right: ${GUTTER / 2}px;
  position: absolute;
  top: ${GUTTER * 2}px;
  width: 100%;
`

const HeaderActionIcon = styled(props => <Icon {...props} />)`
  color: ${COLORS.WHITE};
  font-size: 30px;
`

const OnOffSwitch = styled.View``

const MoreButton = styled.View`
  margin-right: ${GUTTER / 2}px;
`

export default () => (
  <HeaderActionsContainer>
    <BackButton>
      <TouchableWithoutFeedback>
        <HeaderActionIcon name="arrow-left" />
      </TouchableWithoutFeedback>
    </BackButton>
    <MoreButton>
      <TouchableWithoutFeedback>
        <HeaderActionIcon name="ellipsis-h" />
      </TouchableWithoutFeedback>
    </MoreButton>
    <OnOffSwitch>
      <Switch
        ios_backgroundColor={COLORS.TRANSPARENT_GRAY}
        trackColor={{
          false: 'transparent',
          true: 'transparent'
        }}
      />
    </OnOffSwitch>
  </HeaderActionsContainer>
)
