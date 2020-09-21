import React from 'react';
import { screen, render } from "@testing-library/react";
import Tag from './Tag'

test('renders nav bar with welcome message plus links for sign up or log in', () => {
  const testTag = {name: "Vegan"}
  render(<Tag tag = {testTag}/>);
  const tag = screen.getByText(/Vegan/i)
  expect(tag).toBeInTheDocument();
});