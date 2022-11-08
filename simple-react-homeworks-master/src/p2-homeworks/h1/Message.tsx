import React from 'react'
export type MessageInfoProps = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props:MessageInfoProps) {
    return (
        <div>
            <span>{props.avatar}</span>
            <span>{props.name}</span>
            <span>{props.message}</span>
            <span>{props.time}</span>
        </div>
    )
}

export default Message
