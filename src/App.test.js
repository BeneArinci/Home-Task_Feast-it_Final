import React from 'react'
import { screen, render, waitForElement } from "@testing-library/react";
import App from './App'
import mockBasicResponse from '../__mocks__/api-response.json'
import mockDrinkResponse from '../__mocks__/drink-api-response.json'
import mockFloristsResponse from '../__mocks__/florists-api-response.json'




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
  expect(element).toBeInTheDocument()
})


test ('shows florists suppliers when "florists" selection is made', async () =>{
  jest.spyOn(global, "fetch").mockImplementation(() => {
    return Promise.resolve({
      json: () => Promise.resolve(mockFloristsResponse)
    })
  })

  render(<App />)
  const floristsBtn = screen.getByRole("button", {name: /Florists/})
  floristsBtn.click()
  const element = await waitForElement(() => screen.getByText("AMORE FLOREALS MOCK"))
  screen.debug()
  expect(element).toBeInTheDocument()
})

test ('user is sent to the login page if clicking on login', () => {
  render(<App />)
  const logInLink = screen.getByTestId("log-in-link")
  logInLink.click()
  const logInForm = screen.getByTestId("log-in-form")
  screen.debug()
  expect(logInForm).toBeInTheDocument()
})



