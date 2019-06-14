import { checkA11y } from '@storybook/addon-a11y';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from "./Button";
storiesOf("Button", module)
  .addDecorator(checkA11y)
  .add("with text", () => (
    <Button>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button><span role="img" aria-label="Button Only">😀 😎 👍 💯</span></Button>
  ))
  .add("with some style and emoji", () => (
    <Button styles={{ backgroundColor: 'red', color: 'darkRed', }}>😀 😎 👍 💯</Button>
  ));;