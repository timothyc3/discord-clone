export interface Message {
    id: string,
    userId: string,
    text: string
    date: Date,
}

export interface Channel {
    id: string,
    name: string,
    messageIds: string[],
    userIds: string[]
}

export interface Server {
    id: string,
    name: string,
    channelIds: string[],
    userIds: string[]
}

export interface User {
    id: string,
    avatar: string,
    name: string,
}

