export interface Message {
    id: number,
    userId: number,
    text: string
    date: Date,
}

export interface Channel {
    id: number,
    name: string,
    messageIds: number[],
    userIds: number[]
}

export interface Server {
    id: number,
    name: string,
    channelIds: number[],
    userIds: number[]
}

export interface User {
    id: number,
    avatar: string,
    userName: string,
}

