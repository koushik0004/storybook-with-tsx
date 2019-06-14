import * as React from 'react';

export interface BTState {
  count?: number;
  firstName?: string;
}

export interface BTRProps {
  myClass?: string;
  children?: React.ReactNode;
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
// Koushik04_ReactHooks_Storybook

const ButtonTextComboReducer: React.FunctionComponent<BTRProps> = (props: BTRProps) => {
  const [{count, firstName}, dispatch] = React.useReducer(reducer, {
    count: 0,
    firstName: ''
  });
  const updateStateData = (evt: any) => {
    const firstName = evt.target.value;
    dispatch({type: 'type', firstName})
  };
  const myClass = props.myClass || 'btn-secondary';
  return (
    <React.Fragment>
      {props.children &&
        <h2>{props.children}</h2>
      }
      <div className="btn-text-warpper">
        <h4>This Section By useReducer Hook</h4>
        <div className="make-inline">
          <button className={['btn', myClass].join(' ')} type="button"
            onClick={()=>dispatch({type: 'increment'})}>+</button>
          <div className="text-body">Count: {count}</div>
        </div>
        <input type="text" value={firstName} onChange={updateStateData} />
      </div>
    </React.Fragment>
  );
};
export default ButtonTextComboReducer;