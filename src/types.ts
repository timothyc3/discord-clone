export interface Message {
    id: string,
    userId: string,
    text: string
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number
    found: boolean
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
    private: boolean
}

export interface User {
    id: string,
    avatar: string,
    name: string,
    dayBirthday: string,
    monthBirthday: string,
    yearBirthday: string
}

export interface MessagePayload {
    channelId: string,
    userId: string,
    text: string,
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number
}

export interface ChannelPayload {
    serverId: string,
    creatorUserId: string,
    name: string,
    private: boolean
}

export interface ServerPayload {
    creatorUserId: string,
    name: string
}