import {COLORS, FONT_SIZE, GUTTER} from 'constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'
import {Switch, TouchableWithoutFeedback} from 'react-native'
import styled from 'styled-components/native'

const BackButton = styled.View`
  align-self: flex-start;
  margin-right: auto;
`

const HeaderActionButton = styled.View`
  align-items: center;
  background-color: ${COLORS.TRANSPARENT_WHITE};
  border-radius: ${GUTTER / 2}px;
  box-shadow: 0 2px 2px ${COLORS.TRANSPARENT_BLACK};
  height: ${GUTTER}px;
  justify-content: center;
  position: relative;
  top: 1px;
  width: ${GUTTER}px;
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
  font-size: 20px;
  position: relative;
  top: 1px;
`

const OnOffSwitch = styled.View`
  box-shadow: 0 2px 2px ${COLORS.TRANSPARENT_BLACK};
`

const MoreButton = styled.View`
  margin-right: ${GUTTER / 2}px;
`

export default () => (
  <HeaderActionsContainer>
    <BackButton>
      <TouchableWithoutFeedback>
        <HeaderActionButton>
          <HeaderActionIcon name="arrow-left" />
        </HeaderActionButton>
      </TouchableWithoutFeedback>
    </BackButton>
    <MoreButton>
      <TouchableWithoutFeedback>
        <HeaderActionButton>
          <HeaderActionIcon name="dots-horizontal" />
        </HeaderActionButton>
      </TouchableWithoutFeedback>
    </MoreButton>
    <OnOffSwitch>
      <Switch
        ios_backgroundColor={COLORS.TRANSPARENT_WHITE}
        trackColor={{
          false: 'transparent',
          true: 'transparent'
        }}
      />
    </OnOffSwitch>
  </HeaderActionsContainer>
)
