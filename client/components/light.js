import {
  ANIMATION_TIMINGS,
  LIGHT_BOX_SIZE,
  COLORS,
  LIGHT_GUTTER
} from 'constants'
import LottieView from 'lottie-react-native'
import React, {useEffect, useMemo, useState} from 'react'
import {TouchableWithoutFeedback} from 'react-native'
import {Animated, Easing} from 'react-native'
import styled from 'styled-components/native'

const Lamp = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
  align-items: flex-start;
  border: 1px solid red;
`

const LightContainer = styled.View`
  align-items: center;
  background-color: ${({color}) => color};
  border-radius: ${LIGHT_BOX_SIZE / 8}px;
  height: ${LIGHT_BOX_SIZE}px;
  justify-content: center;
  margin: ${LIGHT_GUTTER}px;
  position: relative;
  width: ${LIGHT_BOX_SIZE}px;
`

export default ({id, name, onPress, selected, color = COLORS.DARK_GRAY}) => {
  const [lampAnim] = useState(new Animated.Value(0))
  const [selectedAnim] = useState(new Animated.Value(Number(selected)))

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Animated.timing(lampAnim, {
          duration: ANIMATION_TIMINGS.SLOW,
          easing: Easing.linear,
          toValue: 0.5,
          useNativeDriver: true
        }).start()
      }}>
      <LightContainer color={color}>
        <Lamp>
          <LottieView
            source={require('lottie/lamp.json')}
            progress={lampAnim}
          />
        </Lamp>
      </LightContainer>
    </TouchableWithoutFeedback>
  )
}
