import {Light} from 'components'
import {LIGHT_GUTTER} from 'constants'
import React from 'react'
import styled from 'styled-components/native'

const LightsSelectorContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: -${LIGHT_GUTTER}px;
`

export default ({lights, onLightSelect, selectedLights}) => (
  <LightsSelectorContainer>
    {lights.map(({id, name, color}) => (
      <Light
        id={id}
        key={id}
        name={name}
        onPress={onLightSelect}
        selected={selectedLights.includes(id)}
        color={color}
      />
    ))}
  </LightsSelectorContainer>
)
