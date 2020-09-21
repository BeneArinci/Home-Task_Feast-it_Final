import React from 'react';
import { screen, render } from "@testing-library/react";
import TagsList from './TagsList'

test('renders the tag name', () => {
  const mockTags = [{pid: "2", name: "Vegetarian", tagId: "11"}, {pid: "2", name: "Vegan", tagId: "12"}]
  render(<TagsList tags ={mockTags}/>);
  const veganTag = screen.getByText(/Vegan/i)
  const vegetarianTag = screen.getByText(/Vegetarian/i)
  expect(veganTag).toBeInTheDocument();
  expect(vegetarianTag).toBeInTheDocument();
});