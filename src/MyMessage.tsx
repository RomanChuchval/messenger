import React from 'react';
import {MessageType} from "./App";
import s from './MyMessage.module.css'

type MyMessagePropsType = {
    messageData: MessageType
    isMyPhone: boolean
}

export const MyMessage: React.FC<MyMessagePropsType> = (
    {
        messageData, isMyPhone
    }
) => {
    const {message, isMyMessage, id, name, isOnline, date, avatar} = messageData

    const inOnlineTag = isOnline ? s.online : s.offline

    const finalContainerClass = ` ${s.container } 
    ${!isMyPhone && isMyMessage ? s.reverse_container
        : isMyPhone && !isMyMessage ? s.reverse_container : ''}`

    const finalMessageWrapperClass = ` ${s.message_wrapper } 
    ${!isMyPhone && isMyMessage ? s.reverse_message_wrapper
    : isMyPhone && !isMyMessage ? s.reverse_message_wrapper : ''}`

    const finalMessageTextClass = `${s.message_text}
    ${!isMyPhone && isMyMessage ? s.reverse_message_wrapper
        : isMyPhone && !isMyMessage ? s.reverse_message_wrapper : ''}`

    return (
        <div className={finalContainerClass}>
            <div className={finalMessageWrapperClass}>
                <div className={finalMessageTextClass}>
                    <div>
                        {date}
                    </div>
                        <div className={s.message_text_wrapper}>
                            {message}
                        </div>
                </div>
                <div className={s.friend_info}>
                    <div>
                        {name}
                    </div>
                    <div>
                        <img className={s.avatar} src={avatar} alt="friend_ava"/>
                        <div className={inOnlineTag}></div>
                    </div>
                </div>
            </div>
        </div>

    );
};

