import React from "react";
import {render, cleanup, fireEvent, screen} from "@testing-library/react";
import ServerSidebar from "./ServerSidebar";

describe("Server Side Bar Component", () => {

    let serverBarMock = [
        {name: 'home', active: false, channels:[]},
        {name: 'newServer', active: false, channels:[]},
        {name: 'discover', active: false, channels: []},
    ];

    const mockFunction = jest.fn();

    afterEach(cleanup);

    it("render correctly", () => {
        const {asFragment} = render(<ServerSidebar
            selected={serverBarMock}
            handleButtonClick={mockFunction}
            home={<></>}
            discover={<></>}
            newServer={<></>}
        />);

        expect(asFragment()).toMatchSnapshot();
    });


    it("when servers are passed as props, a server button is added for every string in the array", () => {

        let selectedMock = [
            {name: 'one-server', active: false, channels:[]},
            {name: 'two-server', active: false, channels:[]}
        ];

        render(<ServerSidebar
            selected={selectedMock}
            handleButtonClick={mockFunction}
            home={<div></div>}
            discover={<div></div>}
            newServer={<div></div>}
        />);

        const elements = screen.getAllByRole('button', {name: /-server/i});

        expect(elements).toHaveLength(2);

    });
});
