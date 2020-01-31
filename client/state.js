import React, {createContext, useContext, useReducer} from 'react'
import reducer from 'reducer'

const initialState = {
  loading: true,
  toasts: []
}

const augmentDispatch = (dispatch, getState) => async action => {
  action instanceof Function
    ? await action(augmentDispatch(dispatch, getState), getState)
    : await dispatch(action)
}

export const StateContext = createContext()

let _state
export const StateProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  _state = state

  const getState = () => _state

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
