import { render, screen, fireEvent } from '@testing-library/react';

// import your story from App.stories.js

// setupFile.js

import React from 'react';
import { ButtonClick } from './App.stories';

describe('App', () => {
  it('renders a button with "Click Me" text', () => {
    const { getByText } = render(<ButtonClick />);
    const buttonElement = getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('changes button text to "Thanks" when clicked', () => {
    const { getByText } = render(<ButtonClick />);
    const buttonElement = getByText('Click Me');
    fireEvent.click(buttonElement);
    expect(getByText('Thanks')).toBeInTheDocument();
  });
});

// Add your tests here
// See https://storybook.js.org/docs/react/wrizing-tests/importing-stories-in-tests#example-with-testing-library
