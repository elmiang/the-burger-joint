import React from 'react'
import {render, screen} from '@testing-library/react'
import Tickets from '../Tickets' 
import { BrowserRouter } from 'react-router-dom';

const MockTickets = () => {
  return (
    <BrowserRouter>
      <Tickets/>
    </BrowserRouter>
  )
}

describe("Allows users to enter ticket details", () => {
  it ('allows user to input into the ticket subject', () => {
    render(<MockTickets/>)
    
    const textboxSubject = screen.getByLabelText("Ticket Subject")
    expect(textboxSubject.textContent).toBe("");
    textboxSubject.textContent = "Cheese Missing"
    expect(textboxSubject.textContent).toBe('Cheese Missing');
  })

  it ('allows user to input into the ticket body', () => {
    render(<MockTickets/>)
    const textboxBody = screen.getByLabelText("Description of problem")
    expect(textboxBody.textContent).toBe("");
    textboxBody.textContent = "Where was the cheese? Not on my burger, I'll tel you that much..."
    expect(textboxBody.textContent).toBe("Where was the cheese? Not on my burger, I'll tel you that much...");
  })

})