import React from 'react'
import firebase from "./firebase/firebase"
import { Menu,Grid } from 'semantic-ui-react';
import {connect} from "react-redux"
import {SideBar} from "./components/Sidebar/SideBar.component.jsx"
import Message from "./components/Messages/Messages.component"
import "./app.css"

function Home(props) {
    

    return (      
        <Grid columns="equal">
          <SideBar />
          <Grid.Column className="messagepanel">
        <Message />
      </Grid.Column>

      <Grid.Column  width= {4}>
        <span>

        </span>
      </Grid.Column>
        </Grid>
          
      );

    
}

const mapStateToProps = (state) => {
    
    return{ user : state.user }
}

export default connect(mapStateToProps)(Home)
{/* <h1>This is home component   <span>  </span> </h1>  
<Channels /> 
<button onClick = { () => {firebase.auth().signOut().then( () => {console.log("User logged out")}  )}   }> Logout</button> */}