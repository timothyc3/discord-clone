// import {cleanup, fireEvent, render, screen} from "@testing-library/react";
// import '@testing-library/jest-dom/extend-expect'
// import HomeButton from "./HomeButton";
import React from "react";
//
// describe("Home button", () => {
//
//     const mockFunction = jest.fn();
//
//     afterEach(cleanup);
//
//     it("render correctly", () => {
//         const {asFragment} = render(<HomeButton handleButtonClick={mockFunction} active={false}/>);
//
//         expect(asFragment()).toMatchSnapshot();
//     });
//
//     it("when the button object's attribute 'element' is true, the selected class is added", () => {
//
//         render(<HomeButton handleButtonClick={mockFunction} active={true}/>);
//
//         const homeButton = screen.getByRole('button', {
//             name: /home/i
//         });
//
//         expect(homeButton).toHaveClass("bg-blue rounded-2xl text-white");
//     });
//
//     it("clicking buttons calls handleButtonClick", () => {
//
//         render(<HomeButton handleButtonClick={mockFunction} active={false}/>);
//
//         const element = screen.getByRole('button', {
//             name: /home/i
//         });
//
//         fireEvent.click(element);
//
//         expect(mockFunction).toHaveBeenCalledTimes(1);
//
//         fireEvent.click(element);
//         fireEvent.click(element);
//
//         expect(mockFunction).toHaveBeenCalledTimes(3);
//     });
// })
