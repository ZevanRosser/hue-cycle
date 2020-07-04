import {COLORS} from 'constants'
import NativeLinearGradient from 'react-native-linear-gradient'
import React, {Component, useEffect, useMemo, useState} from 'react'
import {Animated} from 'react-native'
import styled from 'styled-components/native'

class LinearGradient extends Component {
  render() {
    const {color1, color2, children, ...props} = this.props

    return (
      <NativeLinearGradient colors={[color1, color2]} {...props}>
        {children}
      </NativeLinearGradient>
    )
  }
}

Animated.LinearGradient = Animated.createAnimatedComponent(LinearGradient)
Animated.useNativeDriver = true

const AnimatedGradientContainer = styled(props => (
  <Animated.LinearGradient {...props} />
))`
  bottom: 0;
  flex: 1;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`

export default ({children, colors, speed, style}) => {
  const [color1Anim] = useState(new Animated.Value(0))
  const [color2Anim] = useState(new Animated.Value(0))

  const animatedColors =
    colors.length > 0
      ? colors.flatMap(color => [color, color])
      : [COLORS.BLACK, COLORS.BLACK]

  const color1 = useMemo(
    () =>
      color1Anim.interpolate({
        inputRange: [...animatedColors.keys(), animatedColors.length],
        outputRange: animatedColors.concat(...animatedColors.slice(0, 1))
      }),
    [JSON.stringify(animatedColors)]
  )

  const color2 = useMemo(
    () =>
      color1Anim.interpolate({
        inputRange: [...animatedColors.keys(), animatedColors.length],
        outputRange: animatedColors
          .slice(1)
          .concat(...animatedColors.slice(0, 2))
      }),
    [JSON.stringify(animatedColors)]
  )

  useEffect(() => {
    color1Anim.stopAnimation()
    color2Anim.stopAnimation()

    Animated.loop(
      Animated.parallel(
        [color1Anim, color2Anim].map(colorAnim =>
          Animated.timing(colorAnim, {
            toValue: animatedColors.length,
            duration: animatedColors.length * speed
          })
        )
      )
    ).start()
  }, [animatedColors.length, speed])

  return (
    <AnimatedGradientContainer
      color1={color1}
      color2={color2}
      end={{x: 1, y: 1}}
      start={{x: 0, y: 0}}
      style={style}>
      {children}
    </AnimatedGradientContainer>
  )
}
