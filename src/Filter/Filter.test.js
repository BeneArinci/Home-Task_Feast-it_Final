import React from 'react';
import { screen, render } from "@testing-library/react";
import Filter from './Filter'

test('renders the tag name', () => {
  
  render(<Filter />);
  const foodBtn = screen.getByRole("button", {name: /Food/})
  const drinkBtn = screen.getByRole("button", {name: /Drinks/})
  const staffBtn = screen.getByRole("button", {name: /Staff/})
  const floristsBtn = screen.getByRole("button", {name: /Florists/})
  const mtBtn = screen.getByRole("button", {name: /Marquees-Tents/})
  const avBtn= screen.getByRole("button", {name: /Audio-Visual/})

 
  expect(foodBtn).toBeInTheDocument();
  expect(drinkBtn).toBeInTheDocument();
  expect(staffBtn).toBeInTheDocument();
  expect(floristsBtn).toBeInTheDocument();
  expect(mtBtn).toBeInTheDocument();
  expect(avBtn).toBeInTheDocument();
});