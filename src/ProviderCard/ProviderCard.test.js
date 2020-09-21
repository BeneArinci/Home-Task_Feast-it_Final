import React from 'react';
import { screen, render } from "@testing-library/react";
import ProviderCard from './ProviderCard'

test('the card elements for the single provider', () => {
  render(<ProviderCard name= {"Pizza Soul"} shortDescription= {"Best Pizzeria Ever"} image= {"http://anything.com"}/>);
  const image = screen.getByAltText(/Pizza Soul/i)
  const name = screen.getByText(/Pizza Soul/i)
  const description = screen.getByText(/Best Pizzeria Ever/i)
  screen.debug()
  expect(name).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(image).toBeInTheDocument()
});