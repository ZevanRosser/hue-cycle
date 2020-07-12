import {SceneHeaderActions} from 'components'
import {
  ANIMATION_TIMINGS,
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  GUTTER,
  SCENE_HEADER_EXPANDED_HEIGHT,
  SCENE_HEADER_COLLAPSED_HEIGHT,
  SCENE_NAME_MAX_LENGTH
} from 'constants'
import React, {useMemo, useEffect, useState} from 'react'
import {TextInput} from 'react-native'
import {Animated} from 'react-native'
import styled from 'styled-components/native'
import AnimatedGradient from './animated-gradient'

const Headline = styled(props => <Animated.Text {...props} />)`
  color: ${COLORS.WHITE};
  font-family: ${FONT_FAMILY};
  font-weight: bold;
`

const HeadlineContainer = styled(props => <Animated.View {...props} />)`
  align-items: center;
  bottom: ${GUTTER * 0.85}px;
  flex-direction: row;
  flex: 1;
  position: absolute;
`

const HeadlineCursor = styled(props => <Animated.View {...props} />)`
  background-color: ${COLORS.WHITE};
  border-radius: 10px;
  height: 75%;
  width: 2px;
`

const StyledHeadlineTextInput = styled(props => <TextInput {...props} />)`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`

const StyledAnimatedGradient = styled(props => <AnimatedGradient {...props} />)`
  flex-direction: column;
`

const MoreButton = styled.View`
  margin-right: ${GUTTER / 2}px;
`

export default ({colors, onTitleChange, scrollAnim, title}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [cursorAnim] = useState(new Animated.Value(1))

  useEffect(() => {
    cursorAnim.stopAnimation()

    isEditing &&
      Animated.loop(
        Animated.sequence([
          Animated.timing(cursorAnim, {
            toValue: 0,
            duration: ANIMATION_TIMINGS.SLOW
          }),
          Animated.timing(cursorAnim, {
            toValue: 1,
            duration: ANIMATION_TIMINGS.SLOW
          })
        ])
      ).start()
  }, [isEditing, title])

  const headlineFontSize = useMemo(
    () =>
      scrollAnim.interpolate({
        inputRange: [
          0,
          SCENE_HEADER_EXPANDED_HEIGHT - SCENE_HEADER_COLLAPSED_HEIGHT
        ],
        outputRange: [FONT_SIZE.XLARGE, FONT_SIZE.XLARGE * 0.5],
        extrapolate: 'clamp'
      }),
    []
  )

  const headlineTransformX = useMemo(
    () =>
      scrollAnim.interpolate({
        inputRange: [
          0,
          SCENE_HEADER_EXPANDED_HEIGHT - SCENE_HEADER_COLLAPSED_HEIGHT
        ],
        outputRange: [15, 60],
        extrapolate: 'clamp'
      }),
    []
  )

  return (
    <StyledAnimatedGradient colors={colors} speed={1500}>
      <SceneHeaderActions />
      <HeadlineContainer
        style={{
          transform: [
            {
              translateX: headlineTransformX
            }
          ]
        }}>
        <Headline numberOfLines={1} style={{fontSize: headlineFontSize}}>
          {title || ' '}
        </Headline>
        {isEditing && <HeadlineCursor style={{opacity: cursorAnim}} />}
        <StyledHeadlineTextInput
          keyboardAppearance="dark"
          maxLength={SCENE_NAME_MAX_LENGTH}
          onChangeText={onTitleChange}
          onBlur={() => {
            !title && onTitleChange('New Scene')
            setIsEditing(false)
          }}
          onFocus={() => setIsEditing(true)}
          returnKeyType="done"
          selection={{start: title.length, end: title.length}}
          value={title}
        />
      </HeadlineContainer>
    </StyledAnimatedGradient>
  )
}
