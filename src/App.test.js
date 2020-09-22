import React from 'react'
import { screen, render, waitForElement } from "@testing-library/react";
import App from './App'
import mockBasicResponse from '../__mocks__/api-response.json'

jest.spyOn(global, "fetch").mockImplementation(() => {
  return Promise.resolve({
    json: () => Promise.resolve(mockBasicResponse)
  })
})

test ('shows providers in the main page', async () =>{
  render(<App />)

  const element = await waitForElement(() => screen.getByText("I AM A TEST PROVIDER"))
  screen.debug()
  expect(element).toBeInTheDocument()
})

