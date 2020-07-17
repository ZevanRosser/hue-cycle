import {setSceneName, toggleSceneColor} from 'actions'
import {Body, Header, Headline, Section} from 'components'
import {
  SCENE_HEADER_COLLAPSED_HEIGHT,
  SCENE_HEADER_EXPANDED_HEIGHT
} from 'constants'
import {ColorsSelector, LightsSelector, SceneHeader} from 'components'
import React, {useMemo, useState} from 'react'
import {Animated} from 'react-native'
import {withState} from 'state'
import styled from 'styled-components/native'

const StyledBody = styled(props => <Body {...props} />)`
  height: 2000px;
  margin-top: ${SCENE_HEADER_EXPANDED_HEIGHT}px;
`

const StyledHeader = styled(props => <Header {...props} />)`
  position: absolute;
  width: 100%;
`

export default () => {
  const [scrollAnim] = useState(new Animated.Value(0))
  const {dispatch, scenes} = withState()
  const headerContainerHeight = useMemo(
    () =>
      scrollAnim.interpolate({
        inputRange: [
          0,
          SCENE_HEADER_EXPANDED_HEIGHT - SCENE_HEADER_COLLAPSED_HEIGHT
        ],
        outputRange: [
          SCENE_HEADER_EXPANDED_HEIGHT,
          SCENE_HEADER_COLLAPSED_HEIGHT
        ],
        extrapolate: 'clamp'
      }),
    []
  )
  const scene = scenes.find(({editing}) => editing)

  return (
    <>
      <StyledHeader
        style={{
          height: headerContainerHeight
        }}>
        <SceneHeader
          colors={scene.selectedColors}
          onTitleChange={title => dispatch(setSceneName(scene.id, title))}
          scrollAnim={scrollAnim}
          title={scene.name}
        />
      </StyledHeader>
      <Animated.ScrollView
        indicatorStyle="white"
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: scrollAnim
              }
            }
          }
        ])}
        scrollEventThrottle={8}>
        <StyledBody>
          <Section>
            <Headline>Colors</Headline>
            <ColorsSelector
              colors={scene.colors}
              onColorSelect={color =>
                dispatch(toggleSceneColor(scene.id, color))
              }
              selectedColors={scene.selectedColors}
            />
          </Section>
          <Section>
            <Headline>Lights</Headline>
            <LightsSelector
              lights={scene.lights}
              onLightSelect={light => null}
              selectedLights={scene.selectedLights}
            />
          </Section>
          <Section>
            <Headline>Behavior</Headline>
          </Section>
        </StyledBody>
      </Animated.ScrollView>
    </>
  )
}
