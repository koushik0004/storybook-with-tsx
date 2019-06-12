import React, {useState} from 'react'

const ButtonTextCombo: React.FunctionComponent = () => {
  const [{count, firstName}, setData] = useState({
    count: 0,
    firstName: ''
  });
  const updateStateData = (evt: any) => {
    const firstName = evt.target.value;
    setData(state => ({...state, firstName, count: state.count + 1}))
  };
  return (
    <div className="btn-text-warpper">
      <h4>This Section By useState Hook</h4>
      <button className="primary" type="button"
        onClick={()=>setData(state => ({...state, count: state.count + 1}))}>+</button>
      <div className="text-body">Count: {count}</div>
      <input type="text" value={firstName} onChange={updateStateData} />
    </div>
  );
};
export default ButtonTextCombo;