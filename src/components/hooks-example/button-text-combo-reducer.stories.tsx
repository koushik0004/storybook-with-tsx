import { storiesOf } from '@storybook/react';
import * as React from 'react';
import ButtonTextComboReducer from './button-text-combo-reducer';

storiesOf("ButtonTextComboReducer", module)
  .add("useReducer Hook Default", () => (
    <ButtonTextComboReducer>useReducer Hook</ButtonTextComboReducer>
  ))
  .add("useReducer Hook Success", () => (
    <ButtonTextComboReducer myClass="btn-success">useReducer Hook with success button</ButtonTextComboReducer>
  ));