import * as React from 'react';
import './hooks.scss';

const ButtonTextCombo: React.FunctionComponent = (props) => {
  const [{count, firstName}, setData] = React.useState({
    count: 0,
    firstName: ''
  });
  const updateStateData = (evt: any) => {
    const firstName = evt.target.value;
    setData(state => ({...state, firstName, count: state.count + 1}))
  };
  return (
    <React.Fragment>
      {props.children &&
        <h2>{props.children}</h2>
      }
      <div className="btn-text-warpper">
        <h4>This Section By useState Hook</h4>
        <div className="make-inline">
          <button className="btn btn-primary" type="button"
            onClick={()=>setData(state => ({...state, count: state.count + 1}))}>+</button>
          <div className="text-body">Count: {count}</div>
        </div>
        <input type="text" value={firstName} onChange={updateStateData} />
      </div>
    </React.Fragment>
  );
};
export default ButtonTextCombo;