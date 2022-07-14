import React from 'react';

import { render, screen } from "@testing-library/react"
//render: Helps render testing environment

import App from "./App"

test("Renders without errors", () => {
    render(<App />)
})

test("when app mounts, add new animal header exists on screen", () => {
    //Arrage:
    render(<App />
    )
    //Act:

    //get - finds a single element and if not found, fail test
    const header = screen.getByText("Add New Animal")
    console.log(header)

    //query - finds a single element and if not found, return null
    const header2 = screen.queryByText(/add new animal/)
    console.log(header2)

    //find - finds a single element and if not found, throw error
    const header3 = screen.findByText("Add New Animal")
    console.log(header3)

    //Assert: - *verify* that header exists on screen
    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy();
    expect(header).toHaveTextContent("Add New Animal")
})