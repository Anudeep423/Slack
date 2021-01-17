import React,{useEffect} from "react";
import Login from "./components/auth/register.jsx"
import {Link,Route,BrowserRouter as Router,Switch,withRouter} from "react-router-dom"
import LoginForm from "./components/auth/login";
import {connect,Provider} from "react-redux";
import {createStore,applyMiddleware,compose} from "redux";
import firebase from "./firebase/firebase"
import Home from "./home";
import {combinereducers} from "./store/reducer";
import {setUser} from "./store/ActionCreater"
import thunk from "redux-thunk";
import {AppLoader} from "./components/AppLoader/AppLoader.jsx"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combinereducers,  composeEnhancers(applyMiddleware(thunk)));

const Index = (props) => {

  
  

  useEffect( () => {
    firebase.auth().onAuthStateChanged( (user) =>{
      if(user){
        console.log("useeffecttttttttttttttttttttttt",user);
        props.setUser(user)     
        
                    
      }else{
        props.setUser(null);
        props.history.push("/login")
      }
    } )
  },[] )


  


return( <>

<Switch>  
      <Route  exact path = "/home" component = {Home} />
       <Route exact path = "/" component = {Login} />
       <Route exact path = "/login" component = {LoginForm} />
      
        </Switch> </>)
        

}

const mapStateToProps = (state) => {
  return { red :  state.user , loading : state.channel.loading }
}


 const IndexWithRouter = withRouter(connect(mapStateToProps,{setUser})(Index))


function App() {
  return (
    <div >
      <Router>
        <Provider store={store}>
        <IndexWithRouter />
        </Provider>
        </Router>
    </div>
  );
}

export default App;
