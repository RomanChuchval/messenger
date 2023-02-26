import React, {ChangeEvent, useState} from 'react';
import s from './MySmartphone.module.css'
import {MessagesStateType} from "./App";
import {MyMessage} from "./MyMessage";
import maleAva from './assets/ava1.png'
import femaleAva from './assets/ava2.png'

export type MySmartphonePropsType = {
    messagesState: MessagesStateType
    myAddMessage: (messageText: string, isMyPhone: boolean) => void
    isMyPhone: boolean
}

export const MySmartphone: React.FC<MySmartphonePropsType> = (
    {
        messagesState, myAddMessage, isMyPhone
    }
) => {

    const [messageText, setMessageText] = useState<string>('')

    const messagesList = messagesState.map(m => {
        return (
            <MyMessage isMyPhone={isMyPhone} key={m.id} messageData={m}/>
        )
    })

    const onAddMessageHandler = () => {
        myAddMessage(messageText, isMyPhone)
        setMessageText('')
    }

    const onChangeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessageText(e.currentTarget.value)
    }

    return (
        <div className={s.phone}>
            <div className={s.telegram_header}>
               <div>
                   {isMyPhone ? 'Lera' : 'Roman'}
               </div>
                <div>
                    <img className={s.header_ava} src={isMyPhone ? femaleAva : maleAva} alt="avatar"/>
                </div>
            </div>
            <div className={s.message_area}>
                    {messagesList}
            </div>
            <div className={s.input_block}>
                <textarea className={s.input} value={messageText} onChange={onChangeMessageTextHandler}/>
                <button className={s.btn} onClick={onAddMessageHandler}>Send Message</button>
            </div>
        </div>
    );
};

