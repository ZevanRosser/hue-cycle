import {
  ANIMATION_TIMINGS,
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  TOAST
} from 'constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import React, {useEffect, useState} from 'react'
import {Animated} from 'react-native'
import styled from 'styled-components/native'

const TOAST_TIMING = 5000

const ALERT_COLOR_MAP = {
  [TOAST.ALERT]: COLORS.RED,
  [TOAST.INFO]: COLORS.BLUE,
  [TOAST.SUCCESS]: COLORS.GREEN
}

const ALERT_ICON_MAP = {
  [TOAST.ALERT]: 'exclamation-circle',
  [TOAST.INFO]: 'info-circle',
  [TOAST.SUCCESS]: 'check-circle'
}

const StyledToast = styled(props => <Animated.View {...props} />)`
  align-items: center;
  background-color: ${({type}) => ALERT_COLOR_MAP[type]};
  border-radius: 30px;
  flex-direction: row;
  flex: 1;
  margin-top: 10px;
  padding: 5px 12px;
`

const ToastIcon = styled(props => <Icon {...props} />)`
  color: ${COLORS.WHITE};
  font-size: ${FONT_SIZE.MEDIUM * 1.1}px;
  margin-right: 5px;
`

const ToastMessage = styled.Text`
  color: ${COLORS.WHITE};
  font-family: ${FONT_FAMILY};
  font-size: ${FONT_SIZE.MEDIUM}px;
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
      <ToastIcon name={ALERT_ICON_MAP[type]} />
      <ToastMessage>{message}</ToastMessage>
    </StyledToast>
  )
}
