import React from 'react';
import { screen, render } from "@testing-library/react";
import SuppliersList from './SuppliersList'



test('renders a list of suppliers', () => {
  const suppliers = [
    {
      "name": "Mock Pizzeria",
      "tags": [
        {
        "pid": "10",
        "name": "Neapolitan Wood-fired Pizza",
        "tagId": "V5xZAmLXb"
        }
        ],
      "public": {
        "images": [
        {
        "id": "BjlCVXj7z",
        "eid": "7d9e6c80-9009-11e8-af81-2dc2baf60d95",
        "url": "https://feast-it-web-prod.imgix.net/7d9e6c80-9009-11e8-af81-2dc2baf60d95/BjlCVXj7z/Feast-It-Mangiamo-Street-Food-Italian-Pizza-Unique-Mobile-Caterer-Event-Catering-Book-Now-six.jpg",
        "title": ""
        },
        ],
      },
      "dietary": [
        {
        "pid": "2",
        "name": "Vegetarian",
        "tagId": "11"
        },
        {
        "pid": "2",
        "name": "Vegan",
        "tagId": "12"
        },
        {
        "pid": "2",
        "name": "Nut Free",
        "tagId": "16"
        },
        {
        "pid": "2",
        "name": "Dairy Free",
        "tagId": "Hkc1M3mDe"
        }
      ]
    },
    {
      "name": "Mock Chipsy",
      "tags": [
        {
        "pid": "10",
        "name": "Gourmet Loaded Fries",
        "tagId": "753d26a7-8a5d-48a9-b1fb-e13d87e8fa31"
        }
      ],
      "public": {
        "images": [
        {
        "id": "23WRujGGc",
        "eid": "b60b7ad0-41c1-11e9-b89d-e900e144a6ae",
        "url": "https://feast-it-web-prod.imgix.net/b60b7ad0-41c1-11e9-b89d-e900e144a6ae/23WRujGGc/Feast-It-Chipsy-street-food-truck-gourmet-loaded-chips-event-catering-book-now-three.jpg",
        "title": ""
        },
        ]
      },
      "dietary": [
        {
        "pid": "2",
        "name": "Vegetarian",
        "tagId": "11"
        },
        {
        "pid": "2",
        "name": "Vegan",
        "tagId": "12"
        },
        {
        "pid": "2",
        "name": "Halal",
        "tagId": "13"
        },
        {
        "pid": "2",
        "name": "Gluten Free",
        "tagId": "15"
        },
        {
        "pid": "2",
        "name": "Nut Free",
        "tagId": "16"
        },
        {
        "pid": "2",
        "name": "Dairy Free",
        "tagId": "Hkc1M3mDe"
        }
      ]
    }
  ]
  render(<SuppliersList suppliers = {suppliers}/>);
  const firstSupplier = screen.getByText(/Mock Pizzeria/i)
  const secondSupplier = screen.getByText(/Mock Chipsy/i)
  screen.debug()
  expect(firstSupplier).toBeInTheDocument();
  expect(secondSupplier).toBeInTheDocument();
});