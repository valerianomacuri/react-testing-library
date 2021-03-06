import React, { useReducer } from 'react';
import * as ACTIONS from '../../actions'
import * as Reducer from '../../reducers/appReducer'


const TestHookReducer = () => {
  const [reducerState, dispatch] = useReducer(Reducer.Reducer1, Reducer.initialState)

  const dispatchActionSuccess = () => {
    dispatch(ACTIONS.SUCCESS)
  }

  const dispatchActionFailure = () => {
    dispatch(ACTIONS.FAILURE)
  }


  return (
    <div>
       <div>
        {reducerState.stateprop1
           ? <p>stateprop1 is true</p>
           : <p>stateprop1 is false</p>}
       </div>
       <button onClick={dispatchActionSuccess}>
         Dispatch Success
       </button>
       <button onClick={dispatchActionFailure}>
         Dispatch Failure
       </button>
    </div>
  )
}


export default TestHookReducer;