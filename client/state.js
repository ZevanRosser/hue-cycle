import React, {createContext, useContext, useReducer} from 'react'
import reducer from 'reducer'

const initialState = {
  connected: false,
  initialized: false,
  loading: true,
  toasts: []
}

const augmentDispatch = (dispatch, getState) => async action => {
  action instanceof Function
    ? await action(augmentDispatch(dispatch, getState), getState)
    : await dispatch(action)
}

export const StateContext = createContext()

export const StateProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getState = () => state

  return (
    <StateContext.Provider
      value={{
        ...state,
        dispatch: augmentDispatch(dispatch, getState)
      }}>
      {children}
    </StateContext.Provider>
  )
}

// eslint-disable-next-line react-hooks/rules-of-hooks
export const withState = () => useContext(StateContext)
