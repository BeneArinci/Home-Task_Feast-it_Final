import React from 'react'
import { screen, render, waitForElement } from "@testing-library/react";
import App from './App'
import mockBasicResponse from '../__mocks__/api-response.json'
import mockDrinkResponse from '../__mocks__/drink-api-response.json'



test ('shows suppliers in the main page', async () =>{
  
  jest.spyOn(global, "fetch").mockImplementation(() => {
    return Promise.resolve({
      json: () => Promise.resolve(mockBasicResponse)
    })
  })

  render(<App />)

  const element = await waitForElement(() => screen.getByText("I AM A TEST PROVIDER"))
  screen.debug()
  expect(element).toBeInTheDocument()
})

test ('shows drink suppliers when "drink" selection is made', async () =>{
  jest.spyOn(global, "fetch").mockImplementation(() => {
    return Promise.resolve({
      json: () => Promise.resolve(mockDrinkResponse)
    })
  })

  render(<App />)
  const drinkBtn = screen.getByRole("button", {name: /Drinks/})
  drinkBtn.click()
  const element = await waitForElement(() => screen.getByText("I AM A MOCK DRINKS SUPPLIER"))
  screen.debug()
  expect(element).toBeInTheDocument()
})



