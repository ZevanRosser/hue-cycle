import {
  ANIMATION_TIMINGS,
  COLORS,
  COLOR_DOT_SIZE,
  SPACE_AROUND_GUTTER
} from 'constants'
import React, {useEffect, useMemo, useState} from 'react'
import {TouchableWithoutFeedback} from 'react-native'
import {Animated} from 'react-native'
import styled from 'styled-components/native'

const ColorContainer = styled.View`
  align-items: center;
  height: ${COLOR_DOT_SIZE}px;
  justify-content: center;
  margin: ${SPACE_AROUND_GUTTER}px;
  width: ${COLOR_DOT_SIZE}px;
`

const ColorBorder = styled(props => <Animated.View {...props} />)`
  border-radius: ${COLOR_DOT_SIZE / 2}px;
  border: ${SPACE_AROUND_GUTTER}px solid ${COLORS.GRAY};
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`

const Color = styled.View`
  background-color: ${({color}) => color};
  border-color: ${COLORS.BLACK};
  border-radius: ${COLOR_DOT_SIZE / 2}px;
  height: ${COLOR_DOT_SIZE - SPACE_AROUND_GUTTER * 4}px;
  width: ${COLOR_DOT_SIZE - SPACE_AROUND_GUTTER * 4}px;
`

export default ({color, onPress, selected}) => {
  const [selectedAnim] = useState(new Animated.Value(Number(selected)))
  const colorBorderScale = useMemo(
    () =>
      selectedAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [
          (COLOR_DOT_SIZE - SPACE_AROUND_GUTTER * 4) / COLOR_DOT_SIZE,
          1
        ]
      }),
    []
  )

  useEffect(() => {
    Animated.spring(selectedAnim, {
      toValue: Number(selected),
      duration: ANIMATION_TIMINGS.XFAST,
      friction: 4
    }).start()
  }, [selected])

  return (
    <TouchableWithoutFeedback onPress={() => onPress(color)}>
      <ColorContainer>
        <ColorBorder
          style={{
            transform: [{scale: colorBorderScale}]
          }}
        />
        <Color color={color} />
      </ColorContainer>
    </TouchableWithoutFeedback>
  )
}
