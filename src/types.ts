// define the shape of ServerButtons to ensure controls on state: serverButtonSelected
export interface ServerButtonObject {
    button: string,
    active: boolean
}

// defines the shape of the prop passed to ServerSideBar
export interface ServerBarProp {
    selected: Array<ServerButtonObject>,
    handleButtonClick: (event: any) => void,
    servers: Array<string>
}