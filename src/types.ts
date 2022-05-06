export interface Message {
    name: string,
    messages: string
}

export interface Channel {
    name: string,
    messages: Array<Message>
}

// define the shape of ServerObject
export interface Server {
    name: string,
    active: boolean,
    channels: Array<Channel>
}

// defines the shape of the prop passed to ServerSideBar
export interface ServerBarProp {
    selected: Array<Server>,
    handleButtonClick: (event: any) => void,
}