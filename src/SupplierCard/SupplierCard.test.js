import React from 'react';
import { screen, render } from "@testing-library/react";
import SupplierCard from './SupplierCard';

test('the card elements for the single provider', () => {
  render(<SupplierCard name= {"Pizza Soul"} shortDescription= {"Best Pizzeria Ever"} image= {"http://anything.com"} tags={[{name:"Vegetarian"}]}/>);
  const image = screen.getByAltText(/Pizza Soul/i);
  const name = screen.getByText(/Pizza Soul/i);
  const description = screen.getByText(/Best Pizzeria Ever/i);
  expect(name).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});