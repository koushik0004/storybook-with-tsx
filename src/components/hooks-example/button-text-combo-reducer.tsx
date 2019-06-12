import React, {useReducer} from 'react'

export interface BTState {
  count?: number;
  firstName?: string;
}

export interface BTAction {
  type: string;
  firstName?: string;
}

export const BTRState: BTState =  {
  count: 0,
  firstName: ''
}

const reducer = (state: BTState, action: BTAction) => {
  switch(action.type){
    case 'increment':
      return {...state, count: (state.count || 0) + 1};
    case 'type':
      return {...state, count: (state.count || 0) + 1, firstName: action.firstName};
    default:
      return state;
  }
}

const ButtonTextComboReducer: React.FunctionComponent = () => {
  const [{count, firstName}, dispatch] = useReducer(reducer, {
    count: 0,
    firstName: ''
  });
  const updateStateData = (evt: any) => {
    const firstName = evt.target.value;
    dispatch({type: 'type', firstName})
  };
  return (
    <div className="btn-text-warpper">
      <h4>This Section By useReducer Hook</h4>
      <button className="primary" type="button"
        onClick={()=>dispatch({type: 'increment'})}>+</button>
      <div className="text-body">Count: {count}</div>
      <input type="text" value={firstName} onChange={updateStateData} />
    </div>
  );
};
export default ButtonTextComboReducer;