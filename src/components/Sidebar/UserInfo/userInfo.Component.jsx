import React from 'react';
import { Grid, Header, Icon, Image, Dropdown } from 'semantic-ui-react';
import { connect } from "react-redux";
import {withRouter} from "react-router-dom"
import firebase from '../../../firebase/firebase';
import "./userInfo.css";

const UserInfo = (props) => {


    const getDropDownOptions = () => {
        return [{
            key: 'signout',
            text: <span onClick={signOut} >Sign Out</span>
        }]
    }

    const signOut = () => {
        firebase.auth()
            .signOut()
            .then(() => console.log("user signed out"));
    }

    if (props.user) {
        console.log( "userInfo", "calledddddddddddddd");
        return (<Grid>
            <Grid.Column>
                <Grid.Row className="userinfo_grid_row">
                    <Header inverted as="h2">
                        <Icon name="slack" />
                        <Header.Content>Slack</Header.Content>
                    </Header>
                    <Header className="userinfo_displayname" inverted as="h4">
                        <Dropdown
                            trigger={
                                <span>
                                    <Image src={props.user.photoURL} avatar></Image>
                                    {props.user.displayName  }
                                </span>
                            }
                            options={getDropDownOptions()}
                        >
                        </Dropdown>
                        
                    </Header>
                </Grid.Row>
            </Grid.Column>
        </Grid>)
    }
    console.log("called in userrInfoooooo")
    return null;
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(withRouter(UserInfo));