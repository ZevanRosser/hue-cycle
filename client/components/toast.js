import {ANIMATION_TIMINGS, COLORS, FONT_FAMILY, TOAST} from 'constants'
import React, {useEffect, useState} from 'react'
import {Animated} from 'react-native'
import styled from 'styled-components/native'

const TOAST_TIMING = 5000

const alertColorMap = {
  [TOAST.ALERT]: COLORS.RED,
  [TOAST.INFO]: COLORS.GREEN,
  [TOAST.SUCCESS]: COLORS.BLUE
}

const StyledToast = styled(props => <Animated.View {...props} />)`
  align-items: center;
  background-color: ${({type}) => alertColorMap[type]};
  border-radius: 30px;
  margin-top: 10px;
  padding: 5px 10px;
`

const ToastMessage = styled.Text`
  color: ${COLORS.WHITE};
  font-family: ${FONT_FAMILY};
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`

export default ({message, type, onDismiss}) => {
  const [fadeAnim] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: ANIMATION_TIMINGS.FAST
      }),
      Animated.delay(TOAST_TIMING),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: ANIMATION_TIMINGS.FAST
      })
    ]).start(onDismiss)
  }, [])

  return (
    <StyledToast
      type={type}
      style={{
        opacity: fadeAnim,
        transform: [
          {
            translateY: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [30, 0]
            })
          }
        ]
      }}>
      <ToastMessage>{message}</ToastMessage>
    </StyledToast>
  )
}
