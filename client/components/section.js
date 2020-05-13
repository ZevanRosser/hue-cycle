import {GUTTER} from 'constants'
import React from 'react'
import styled from 'styled-components/native'

const SectionContainer = styled.View`
  margin-bottom: ${GUTTER}px;
`

export default ({children}) => <SectionContainer>{children}</SectionContainer>
