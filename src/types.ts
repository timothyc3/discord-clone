export interface Message {
    name: string,
    messages: string
}

export interface Channel {
    name: string,
    active: boolean,
    messages: Array<Message>
}

// define the shape of ServerObject
export interface Server {
    name: string,
    active: boolean,
    channels: Array<Channel>
}

