import React, {useEffect, useState} from 'react'
import {Animated} from 'react-native'
import styled from 'styled-components/native'

const AnimatedGradientContainer = styled(props => <Animated.View {...props} />)`
  bottom: 0;
  flex: 1;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`

export default ({colors, speed}) => {
  const [anim] = useState(new Animated.Value(0))

  useEffect(() => {
    anim.stopAnimation()

    Animated.loop(
      Animated.sequence([
        Animated.timing(anim, {
          toValue: colors.length,
          duration: speed * colors.length
        }),
        Animated.timing(anim, {
          toValue: 0,
          duration: speed * colors.length
        })
      ])
    ).start()
  }, [colors])

  return (
    <AnimatedGradientContainer
      style={{
        backgroundColor: anim.interpolate({
          inputRange: [...colors.keys()],
          outputRange: colors
        })
      }}
    />
  )
}
