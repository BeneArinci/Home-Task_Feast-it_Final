import React from 'react';
import { screen, render } from "@testing-library/react";
import LogIn from './LogIn';

test('the card elements for the single provider', () => {
  render(<LogIn />);
  const logInForm = screen.getByTestId("log-in-form");
  expect(logInForm).toBeInTheDocument();
});