import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import Checkout from '../Checkout'
import { BrowserRouter } from 'react-router-dom';


const MockCheckout = () => {
  return (
    <BrowserRouter>
      <Checkout/>
    </BrowserRouter>
  )
}

describe("Allows users to enter their payment details", () => {
  it('correctly identifies the card type as Visa', () => {
    render(<MockCheckout/>)
    const radioButton = screen.getByLabelText('Visa');
    expect(radioButton.checked).toEqual(false);
    fireEvent.click(screen.getByLabelText('Visa'))
    expect(radioButton.checked).toEqual(true);
  });
  
  it('will only allow one card type to be selected at any given time', () => {
    render(<MockCheckout/>)
    const radioButtonVisa = screen.getByLabelText('Visa');
    const radioButtonMaster = screen.getByLabelText('Mastercard');
    fireEvent.click(radioButtonVisa)
    expect(radioButtonVisa.checked).toEqual(true);
    expect(radioButtonMaster.checked).toEqual(false);
    fireEvent.click(radioButtonMaster)
    expect(radioButtonVisa.checked).toEqual(false);
    expect(radioButtonMaster.checked).toEqual(true);
  });

  it ('allows user to enter their Card Number', () => {
    render(<MockCheckout/>)
    const textboxCardNo = screen.getByLabelText("Card Number")
    expect(textboxCardNo.textContent).toBe("");
    textboxCardNo.textContent = "5345783200567832"
    expect(textboxCardNo.textContent).toBe('5345783200567832');
  })

  it ('allows user to enter their CSV', () => {
    render(<MockCheckout/>)
    const textboxCardNo = screen.getByLabelText("CSV")
    expect(textboxCardNo.textContent).toBe("");
    textboxCardNo.textContent = "444"
    expect(textboxCardNo.textContent).toBe('444');
  })

  it('card expiration options are available & are changeable', () => {
    render(<MockCheckout/>)
    fireEvent.change(screen.getByTestId('ExpMM'))
    let optionsMonth = screen.getAllByTestId('ExpMMArray')
    expect(optionsMonth[0].selected).toBeTruthy();
    expect(optionsMonth[1].selected).toBeFalsy();
    expect(optionsMonth[2].selected).toBeFalsy();
    expect(optionsMonth[3].selected).toBeFalsy();
    expect(optionsMonth[4].selected).toBeFalsy();

    fireEvent.change(screen.getByTestId('ExpYYYY'))
    let optionsYear = screen.getAllByTestId('ExpYYYYArray')
    expect(optionsYear[0].selected).toBeTruthy();
    expect(optionsYear[1].selected).toBeFalsy();
    expect(optionsYear[2].selected).toBeFalsy();
    expect(optionsYear[3].selected).toBeFalsy();
    expect(optionsYear[4].selected).toBeFalsy();
  })
})