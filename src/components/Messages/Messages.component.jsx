import React,{useEffect,useState,useRef} from 'react'
import MessageHeader from "./MessageHeader/MessageHeader.component"
import {connect} from "react-redux"
import MessageContent from "./MessageContent/MessageContent.component"
import MessageInput from "./MessageInput/MessageInput.component"
import firebase from "../../firebase/firebase"
import { Segment,Comment } from 'semantic-ui-react'
import "./Message.css"

function Messages(props) {
    const [message,setMessage] = useState([]);
    const [SearchTerm,setSearchTerm] = useState();
    const messageRef = firebase.database().ref("messages");
    let divRef = useRef();
    useEffect( () => { 
        setMessage([])
        if(props.channel.currentUser !== null){
               messageRef.child(props.channel.id).on('child_added',(snap) => {
                    setMessage((currentState) =>{
                        let updateState = [...currentState]
                        updateState.push(snap.val())
                        return updateState
                    }  )
               } 
               
               ) 
        return () => messageRef.child(props.channel.id).off()
            }

    } ,[props.channel])

    useEffect(()=> {
        divRef.scrollIntoView({behavior : 'smooth'});
    },[message])

    console.log(message)

   const displayMessages = () => {
       let stateMessage = SearchTerm ? filterMessageByTerm() : message
       if(stateMessage.length > 0){         
      return stateMessage.map(m => {
          console.log(m);
          if(props.user){
           return <MessageContent key ={m.timestamp} message = {m} userName = {m.user.userName}
            MchannelId = {m.channelId} channelId = {props.channel.id} avatar = {props.user.photoURL}
            ownMessage =  {props.user.uid === m.user.id} />  
          }       
       },
       )
        
       
    }
   } 

   const uniqueUsers = () => {
    
    const userNumber = message.reduce( (acc,messages) => {
          if(!acc.includes(messages.user.userName)){
              acc.push(messages.user.userName)
              console.log("calleddd in uniqueeUsersss")
          } 
          return acc
       }  
       ,[])
    
    return userNumber.length

   }

   const filterMessageByTerm = () => {
     
    const regex = new RegExp(SearchTerm,"gi");
    const searchedMessage =  message.reduce( (acc,messages) => {
         if(messages.content && messages.content.match(regex) || messages.user.userName.match(regex) ){
             acc.push(messages);
             console.log("calleddd in uniqueeUsersss")
         } 
         return acc
      }  
      ,[]) 
      
      return searchedMessage
    
   }

   const searchTermChange = (e) => {

    const val = e.target.value;

    setSearchTerm(val);
    

   }
   

   return <div className="messages"><MessageHeader starred = {false} isPrivateChat = {props.channel.isPrivateChat}
    value = {SearchTerm} uniqueUsers = {uniqueUsers()} 
    searchTermChange={searchTermChange}
      channelName = {props.channel.name}/>
   <Segment className="messagecontent">
       <Comment.Group>
           {displayMessages()}
           <div ref={currentEl => divRef = currentEl}></div>
           
       </Comment.Group>
   </Segment>
   <MessageInput /></div>
}

const mapStateToProps = (state) => {


    return  { user : state.user ,channel : state.channel }
    console.log("called in messageee component", state.channel)
}

export default connect(mapStateToProps)(Messages)
