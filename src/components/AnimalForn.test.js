import React from 'react';

import { render, screen } from '@testing-library/react'

import userEvent from '@testing-library/user-event'

import AnimalForm from "./AnimalForm"

test("Animal form renders successfully", () => {
    render(<AnimalForm />)
})

test("when user fills all fields, text appears in list", () => {
    //arrange
    render(<AnimalForm />)

    const dummyInputs = ["feline", 102, "super cute"];

    //Act
    const specieInput = screen.getByLabelText(/species:/i)
    userEvent.type(specieInput, dummyInputs[0])

    const ageInput = screen.getByLabelText(/age:/i)
    userEvent.type(ageInput, dummyInputs[1].toString())

    const notesInput = screen.getByLabelText(/notes:/i)
    userEvent.type(notesInput, dummyInputs[2].toString())

    setTimeout(() => {
        const submitButton = screen.getByRole("button");
        //ARIA roles - DOM elements that have specific role attributes automatically assigned to them.
        userEvent.click(submitButton);
    }, 600)

    //Assert
    const speciesInList = screen.queryByText(dummyInputs[0])
    expect(speciesInList).toBeInTheDocument();

    const speciesList2 = await screen.findByText(dummyInputs[0])
    expect(speciesList2).toBeInTheDocument();

})