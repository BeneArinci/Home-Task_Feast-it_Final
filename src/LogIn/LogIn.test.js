import React from 'react';
import { screen, render } from "@testing-library/react";
import LogIn from './LogIn'

test('the card elements for the single provider', () => {
  render(<LogIn />);
  const username = screen.getByText(/Username/i)
  //const unTextBox = screen.getByRole('textbox', { name: 'user-id' })
  const password = screen.getByText(/Password/i)
  //const pTextBox = screen.getByRole("textbox", {name: 'password'})
  const btn = screen.getByRole("button", {name: 'Submit'})
  screen.debug()
  expect(username).toBeInTheDocument();
  //expect(unTextBox).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  //expect(pTextBox).toBeInTheDocument();
  expect(btn).toBeInTheDocument();
});