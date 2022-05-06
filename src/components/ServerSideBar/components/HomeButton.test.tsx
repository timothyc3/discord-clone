import {cleanup, fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import HomeButton from "./HomeButton";
import React from "react";
import ServerSidebar from "../ServerSidebar";

describe("Home button", () => {

    let serverBarMock = [
        {button: 'home', active: false},
        {button: 'newServer', active: false},
        {button: 'discover', active: false},
    ];

    const mockFunction = jest.fn();

    afterEach(cleanup);

    it("render correctly", () => {
        const { asFragment } = render(<HomeButton  handleButtonClick={mockFunction} selected={serverBarMock}/>);

        expect(asFragment()).toMatchSnapshot();
    });

    it( "when the button object's attribute 'element' is true, the selected class is added", () => {

        let activeTrueMock = [
            {button: 'home', active: true},
            {button: 'newServer', active: false},
            {button: 'discover', active: false},
        ];

        render(<HomeButton  handleButtonClick={mockFunction} selected={activeTrueMock}/>);

        const homeButton = screen.getByRole('button', {
            name: /home/i
        });

        expect(homeButton).toHaveClass("bg-blue rounded-2xl text-white");
    });

    it("clicking buttons calls handleButtonClick", () => {

        render(<HomeButton  handleButtonClick={mockFunction} selected={serverBarMock}/>);

        const element = screen.getByRole('button', {
            name: /home/i
        });

        fireEvent.click(element);

        expect(mockFunction).toHaveBeenCalledTimes(1);

        fireEvent.click(element);
        fireEvent.click(element);

        expect(mockFunction).toHaveBeenCalledTimes(3);
    });
})
