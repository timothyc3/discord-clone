import React from "react";
import {render, cleanup, fireEvent ,screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import ServerSidebar from "./ServerSidebar";

describe("Server Side Bar Component", () => {

    let serverBarMock = [
        {button: 'home', active: false},
        {button: 'newServer', active: false},
        {button: 'discover', active: false},
    ];

    const mockFunction = jest.fn();


    afterEach(cleanup);

    it("render correctly", () => {
        const { asFragment } = render(<ServerSidebar
            selected={serverBarMock}
            handleButtonClick={mockFunction}
        />);

        expect(asFragment()).toMatchSnapshot();
    });

    it("clicking buttons calls handleButtonClick", () => {

        render(<ServerSidebar
            selected={serverBarMock}
            handleButtonClick={mockFunction}
        />);

        const element = screen.getByRole('button', {
            name: /newServer/i
        });

        fireEvent.click(element);

        expect(mockFunction).toHaveBeenCalledTimes(1);

        fireEvent.click(element);
        fireEvent.click(element);

        expect(mockFunction).toHaveBeenCalledTimes(3);
    });

    it( "when the button object's attribute 'element' is true, the selected class is added", () => {

        let newServerTrueServerBarMock = [
            {button: 'home', active: false},
            {button: 'newServer', active: true},
            {button: 'discover', active: true},
        ];

        render(<ServerSidebar
            selected={newServerTrueServerBarMock}
            handleButtonClick={mockFunction}
        />);
        const newServerButton = screen.getByRole('button', {
            name: /newServer/i
        });

        const discoverButton = screen.getByRole('button', {
            name: /discover/i
        });

        expect(newServerButton).toHaveClass("selected");
        expect(discoverButton).toHaveClass("selected");
    });

    it("when servers are passed as props, a server button is added for every string in the array", () => {

        let selectedMock = [
            {button: 'home', active: false},
            {button: 'newServer', active: false},
            {button: 'discover', active: false},
            {button: 'ServerOne', active: false},
            {button: 'ServerTwo', active: false}
        ];

        render(<ServerSidebar
            selected={selectedMock}
            handleButtonClick={mockFunction}
        />);


    });
});
