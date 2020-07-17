import {COLORS, COLOR_DOT_SIZE, COLOR_GUTTER} from 'constants'
import React from 'react'
import {TouchableWithoutFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styled from 'styled-components/native'

const AddNewColor = styled.View`
  align-items: center;
  background-color: ${COLORS.WHITE};
  border-color: ${COLORS.BLACK};
  border-radius: ${COLOR_DOT_SIZE / 2}px;
  height: ${COLOR_DOT_SIZE - COLOR_GUTTER * 4}px;
  justify-content: center;
  width: ${COLOR_DOT_SIZE - COLOR_GUTTER * 4}px;
`

const AddNewColorContainer = styled.View`
  align-items: center;
  height: ${COLOR_DOT_SIZE}px;
  justify-content: center;
  margin: ${COLOR_GUTTER}px;
  width: ${COLOR_DOT_SIZE}px;
`

const AddNewIcon = styled(props => <Icon {...props} />)`
  color: ${COLORS.DARK_GRAY};
  font-size: 30px;
  left: 1px;
  position: relative;
  top: 1px;
`

export default () => {
  return (
    <TouchableWithoutFeedback>
      <AddNewColorContainer>
        <AddNewColor>
          <AddNewIcon name="palette" />
        </AddNewColor>
      </AddNewColorContainer>
    </TouchableWithoutFeedback>
  )
}
