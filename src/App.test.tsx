import React from "react";
import {render, getByTestId} from "@testing-library/react";
import App from "./App";


describe("App", () => {
    it("Renders correctly", () => {
        const {asFragment} = render(<App />);
        expect(asFragment()).toMatchSnapshot();
    });

})