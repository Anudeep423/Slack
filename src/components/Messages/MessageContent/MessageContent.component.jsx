import React,{useEffect} from 'react';
import { Comment,Image } from "semantic-ui-react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

import "./MessageContent.css";

TimeAgo.locale(en);

const timeAgo = new TimeAgo();

const MessageContent = (props) => {

    console.log("Avatarrrrrrrr",props.avatar)
    if(props.MchannelId === props.MchannelId){
    return <Comment>
        <Comment.Avatar src={props.avatar} />
        <Comment.Content className={props.ownMessage ? "ownMessage" : null}>
            <Comment.Author as="a">{props.userName}</Comment.Author>
            <Comment.Metadata>{timeAgo.format(props.message.timestamp)}</Comment.Metadata>
            {props.message.image ? <Image onLoad={props.imageLoaded} src={props.message.image} /> :
                <Comment.Text>{props.message.content}</Comment.Text>
            }
        </Comment.Content>
    </Comment>
    }
       
     
}

export default MessageContent;