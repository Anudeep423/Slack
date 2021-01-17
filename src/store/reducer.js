import {set_user,set_channel} from "./ActionTypes";
import {combineReducers} from "redux";

const defaultState = {
    currentUser : null
}

const userReducer = (state = defaultState,action) => {

if(action.type === set_user){

    state = action.payload

    return state

}

return state

}
const defaultStat = {
    currentUser : null,
    loading : true
}

const channelReducer = (state = defaultStat,action) => {

    if(action.type === set_channel){
        let payload = action.payload
        state  = {...payload}
        state.loading = false
        return state
    
    }
    return state
    }




export const combinereducers = combineReducers({user : userReducer , channel : channelReducer})