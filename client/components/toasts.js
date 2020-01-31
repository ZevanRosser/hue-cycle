import {removeToast} from 'actions'
import {ANIMATION_TIMINGS, COLORS, GUTTER, TOAST} from 'constants'
import React, {useEffect, useState} from 'react'
import {Animated} from 'react-native'
import {iOSUIKit} from 'react-native-typography'
import {withState} from 'state'
import styled from 'styled-components/native'

const TOAST_TIMING = 5000

const alertColorMap = {
  [TOAST.ALERT]: COLORS.RED,
  [TOAST.INFO]: COLORS.GREEN,
  [TOAST.SUCCESS]: COLORS.BLUE
}

const ToastsContainer = styled.View`
  align-items: center;
  bottom: ${GUTTER}px;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  width: 100%;
`

const StyledToast = styled(props => <Animated.View {...props} />)`
  align-items: center;
  background-color: ${({type}) => alertColorMap[type]};
  border-radius: 30px;
  margin-top: 10px;
  padding: 5px 10px;
`

const ToastMessage = styled.Text`
  ${iOSUIKit.subheadEmphasizedWhite};
  text-align: center;
`

const Toast = ({message, type, onDismiss}) => {
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
    ]).start()
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

export default () => {
  const {toasts, dispatch} = withState()

  return (
    <ToastsContainer>
      {toasts
        .filter(({shown}) => !shown)
        .map(({message, id, type}) => (
          <Toast
            key={id}
            message={message}
            onDismiss={() => dispatch(removeToast(id))}
            type={type}
          />
        ))}
    </ToastsContainer>
  )
}
