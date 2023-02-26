import React, {useReducer} from 'react';
import './App.css';
import {MySmartphone} from "./MySmartphone";
import {messagesReducer, myAddMessageAC} from "./reducers/messages-reducer";
import {v1} from "uuid";
import maleAva from "./assets/ava1.png";
import femaleAva from "./assets/ava2.png";


export type MessagesStateType = Array<MessageType>

export type MessageType = {
    id: string
    name: string
    message: string
    isMyMessage: boolean
    date: string
    avatar: string
    isOnline: boolean

}

function App() {

const [messages, messagesDispatch] = useReducer(messagesReducer, [
    {
        id: v1(),
        name: 'Roman',
        message: "Hello!",
        isMyMessage: true,
        date: '13:00 PM',
        avatar: maleAva,
        isOnline: true,
    },
    {
        id: v1(),
        name: 'Valeria',
        message: 'Hi, how are you?',
        isMyMessage: false,
        date: '13:05PM',
        avatar: femaleAva,
        isOnline: true,
    }

])

    const myAddMessage = (messageText: string, isMyPhone: boolean) => {
        messagesDispatch(myAddMessageAC(messageText, isMyPhone))
    }

  return (
    <div className="App">
        <MySmartphone messagesState={messages} myAddMessage={myAddMessage} isMyPhone={true}/>
        <MySmartphone messagesState={messages} myAddMessage={myAddMessage} isMyPhone={false} />
    </div>
  );
}

export default App;
