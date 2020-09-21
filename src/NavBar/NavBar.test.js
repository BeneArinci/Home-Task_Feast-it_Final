import React from 'react';
import { screen, render } from "@testing-library/react";
import NavBar from './NavBar'

test('renders nav bar with welcome message plus links for sign up or log in', () => {
  render(<NavBar />);
  const welcomeMessage = screen.getByText(/Welcome,/i)
  const logIn = screen.getByText(/Log In/i)
  expect(welcomeMessage).toBeInTheDocument();
  expect(logIn).toBeInTheDocument();
});