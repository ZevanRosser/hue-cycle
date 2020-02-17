import React, {createContext, useContext, useReducer} from 'react'
import reducer from 'reducer'

const initialState = {
  // is the hue bridge connected?
  connected: false,
  // has the app been initialized?
  initialized: false,
  // is the app ready to accept interactions?
  interactable: false,
  // is the app loading?
  loading: true,
  // notifications to show the user
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
