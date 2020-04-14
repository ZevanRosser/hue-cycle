import {removeToast} from 'actions'
import {Toast} from 'components'
import {GUTTER, ZINDEX} from 'constants'
import React from 'react'
import {withState} from 'state'
import styled from 'styled-components/native'

const ToastsContainer = styled.View`
  align-items: center;
  bottom: ${GUTTER}px;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  width: 100%;
  z-index: ${ZINDEX.TOAST};
`

export default () => {
  const {toasts, dispatch} = withState()

  return (
    <ToastsContainer>
      {toasts.map(({message, id, type}) => (
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
