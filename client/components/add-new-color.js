import {COLORS, COLOR_DOT_SIZE, SPACE_AROUND_GUTTER} from 'constants'
import React from 'react'
import {TouchableWithoutFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styled from 'styled-components/native'

const AddNewColor = styled.View`
  align-items: center;
  background-color: ${COLORS.DARK_GRAY};
  border-color: ${COLORS.BLACK};
  border-radius: ${COLOR_DOT_SIZE / 2}px;
  height: 100%;
  justify-content: center;
  margin-right: auto;
  width: 100%;
`

const AddNewColorContainer = styled.View`
  align-items: center;
  height: ${COLOR_DOT_SIZE}px;
  justify-content: center;
  margin: ${SPACE_AROUND_GUTTER}px;
  padding: ${SPACE_AROUND_GUTTER * 2}px;
  width: ${COLOR_DOT_SIZE}px;
`

const AddNewIcon = styled(props => <Icon {...props} />)`
  color: ${COLORS.WHITE};
  font-size: 20px;
`

export default () => {
  return (
    <TouchableWithoutFeedback>
      <AddNewColorContainer>
        <AddNewColor>
          <AddNewIcon name="plus" />
        </AddNewColor>
      </AddNewColorContainer>
    </TouchableWithoutFeedback>
  )
}
