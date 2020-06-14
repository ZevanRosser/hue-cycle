import NativeLinearGradient from 'react-native-linear-gradient'
import React, {Component, useEffect, useState} from 'react'
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

export default ({children, colors, speed}) => {
  const [color1Anim] = useState(new Animated.Value(0))
  const [color2Anim] = useState(new Animated.Value(0))

  const animatedColors = colors.flatMap(color => [color, color])

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
  }, [JSON.stringify(colors)])

  return (
    <AnimatedGradientContainer
      color1={color1Anim.interpolate({
        inputRange: [...animatedColors.keys(), animatedColors.length],
        outputRange: animatedColors.concat(...animatedColors.slice(0, 1))
      })}
      color2={color1Anim.interpolate({
        inputRange: [...animatedColors.keys(), animatedColors.length],
        outputRange: animatedColors
          .slice(1)
          .concat(...animatedColors.slice(0, 2))
      })}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      {children}
    </AnimatedGradientContainer>
  )
}
