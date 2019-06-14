import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Button from './components/Button'
import ButtonTextCombo from './components/hooks-example/button-text-combo-state-only'
import ButtonTextComboReducer from './components/hooks-example/button-text-combo-reducer'

const App: React.FunctionComponent = () => {
  const executeClickHandled = (evt: any) => {
    console.log(evt.target.textContent);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button onClick={executeClickHandled}>Click To Work</Button>
        <ButtonTextCombo />
        <ButtonTextComboReducer />
      </header>
    </div>
  );
}

export default App;
