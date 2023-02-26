import {MessagesStateType} from "../App";
import {v1} from "uuid";
import moment from "moment/moment";
import maleAva from '../assets/ava1.png'
import femaleAva from '../assets/ava2.png'

const ADD_MESSAGE = 'ADD_MESSAGE'

export type FinalActionsType = MyAddMessageACType



export const messagesReducer = (state: MessagesStateType, action: FinalActionsType): MessagesStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            const currentTime = moment().format('LT')
            const myMessage = {
                id: v1(),
                name: 'Roman',
                message: action.payload.messageText,
                isMyMessage: true,
                date: currentTime,
                avatar: maleAva,
                isOnline: true,
            }
            const FriendMessage = {
                id: v1(),
                name: 'Valeria',
                message: action.payload.messageText,
                isMyMessage: false,
                date: currentTime,
                avatar: femaleAva,
                isOnline: true,
            }
            return action.payload.isMyPhone ? [...state, myMessage] : [...state, FriendMessage]
    }
    return state
}


type MyAddMessageACType = ReturnType<typeof myAddMessageAC>
export const myAddMessageAC = (messageText: string, isMyPhone: boolean) => {
    return {
        type: ADD_MESSAGE,
        payload: {
            messageText,
            isMyPhone
        }
    }
}