import React,{useState} from 'react'
import firebase from "../../../firebase/firebase"
import {connect} from "react-redux"
import { Comment,Image,Button,Segment,Input } from "semantic-ui-react";

const messageRef = firebase.database().ref('messages');

function MessageInput(props) {

    const [message,setMessage] = useState("");

    const onChange = (e) =>{
        setMessage(e.target.value);
    }

    const createMessageInfo = () => {
        return {
            user : {
             userName :  props.user.displayName,
            id : props.user.uid
            },
            channelId : props.channel.id,
            content : message,
            timestamp : firebase.database.ServerValue.TIMESTAMP
        }
    }
    const createActionButtons = () => {
        return <>
            <Button icon="send" onClick={onSub} />
            <Button icon="upload"  />
        </>
    }

    const onSub = () => {
        messageRef.child(props.channel.id)
        .push()
        .set(createMessageInfo())
        .then( () => {console.log("messagee is sentttt")}  )
        .catch(err => console.log(err))

        setMessage("")
    }
    return (
        <div>
           <Segment>
        <Input
            onChange={onChange}
            fluid={true}
            name="message"
            value={message}
            label={createActionButtons()}
            labelPosition="right"
        />
        
    </Segment>

            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user : state.user,
        channel : state.channel
    }
}

export default connect(mapStateToProps)(MessageInput)
