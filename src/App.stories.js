import React from 'react';
import { action } from '@storybook/addon-actions';

import App from './App';

export default {
  title: 'App',
  component: App,
};

export const Default = () => (
  <App />
);

export const ButtonClick = () => (
  <App onClick={action('button-click')} />
);
