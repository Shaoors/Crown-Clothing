import React from "react";
import { Switch, Route,Redirect } from "react-router-dom";
import "./App.css";
import {setCurrentUser} from "./redux/user/user.actions"
import {connect} from "react-redux";
import HomePage from "./pages/homapage/homapage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import {auth,createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
 

  unsubscribeFromAuth= null;
  componentDidMount(){

    const {setCurrentUser}= this.props;
    //idr kia hora
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth =>{
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
          }) 
        });
      }
      //idr kia hora
      setCurrentUser(userAuth);
    })
  }
//ye yaha q use
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" render={()=>this.props.currentUser ? <Redirect to="/"/>:(<SignInAndSignUpPage/>)} />
      </Switch>
    </div>
  );
}
}
/*curentuser kaha say milrha isko*/
const mapToStateProps = ({user})=> ({
  currentUser:user.currentUser
})
//is say kia hta
const mapDispatchProps= dispatch =>({
setCurrentUser:user=> dispatch(setCurrentUser(user))
})
export default connect(mapToStateProps,mapDispatchProps)(App);
 