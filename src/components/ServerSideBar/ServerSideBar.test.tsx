import React from "react";
// import {render, cleanup, screen} from "@testing-library/react";
// import ServerSidebar from "./ServerSidebar";
//
// describe("Server Side Bar Component", () => {
//
//
//     afterEach(cleanup);
//
//     it("render correctly", () => {
//         const {asFragment} = render(<ServerSidebar
//             serverButtons={[<div></div>, <div></div>]}
//             home={<></>}
//             discover={<></>}
//             newServer={<></>}
//         />);
//
//         expect(asFragment()).toMatchSnapshot();
//     });
//
//
//     it("when servers are passed as props, a server button is added for every string in the array", () => {
//
//         render(<ServerSidebar
//             serverButtons={[<div></div>, <div></div>]}
//             home={<div></div>}
//             discover={<div></div>}
//             newServer={<div></div>}
//         />);
//
//         const elements = screen.getAllByRole('button', {name: /-server/i});
//
//         expect(elements).toHaveLength(2);
//
//     });
// });
