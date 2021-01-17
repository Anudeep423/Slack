import {set_user,set_channel} from "./ActionTypes";

export const setUser = (userss) => dispatch => {

   console.log("called in actionsssss")

    dispatch({  type : set_user , payload : userss
      })

}

export const setChannel = (channel) => {

  console.log("called in action creators")
return {
  type : set_channel,
  payload : channel
}

}