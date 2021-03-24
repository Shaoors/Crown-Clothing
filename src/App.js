import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homapage/homapage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import {auth} from './firebase/firebase.utils';
const Hatspage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth= null;
  componentDidMount(){
    auth.onAuthStateChanged(user =>{
      this.setState({currentUser:user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <div>
      <Header currentUser= {this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}
}

export default App;
