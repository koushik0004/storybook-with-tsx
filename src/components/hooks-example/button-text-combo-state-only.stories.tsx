import { storiesOf } from '@storybook/react';
import * as React from 'react';
import ButtonTextCombo from "./button-text-combo-state-only";

storiesOf("ButtonTextCombo", module)
  .add("useState Hook", () => (
    <ButtonTextCombo>useState Hook</ButtonTextCombo>
  ));