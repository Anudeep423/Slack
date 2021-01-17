import React from 'react';
import { Menu } from 'semantic-ui-react';
import "./SideBar.css"
import UserInfo from "./UserInfo/userInfo.Component.jsx"
import Channels from "./Channels/channels.component" 
import PrivateChat from "./PrivateChat/PrivateChat.component"

export const SideBar = () => {
    return (<Menu vertical fixed="left" borderless size="large" className="side_bar"> 
    
     <UserInfo />
     <Channels />
     <PrivateChat />
    </Menu>
    )
}