import {initialize} from 'actions'
import {Toasts} from 'components'
import React, {useEffect} from 'react'
import {Home, Splash} from 'screens'
import {withState} from 'state'

export default () => {
  const {loading, dispatch} = withState()

  useEffect(() => {
    dispatch(initialize())
  }, [])

  const renderSplash = () => loading && <Splash />
  const renderHome = () => !loading && <Home />

  return (
    <>
      {renderSplash()}
      {renderHome()}
      <Toasts />
    </>
  )
}
