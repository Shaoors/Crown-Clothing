import React from "react";
import { Switch, Route,Redirect } from "react-router-dom";
import "./App.css";
import {selectCurrentUser} from "./redux/user/user.selector";
import {setCurrentUser} from "./redux/user/user.actions";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import HomePage from "./pages/homapage/homapage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import CheckOutPage from "./pages/checkout/checkout.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import {auth,createUserProfileDocument,addCollectionAndDocuments} from './firebase/firebase.utils';
//import {selectCollectionsForPreview} from "./redux/shop/shop.selectors"

class App extends React.Component {
 

  unsubscribeFromAuth= null;
  componentDidMount(){

    //const {setCurrentUser,collectionsArray}= this.props;
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
      //addCollectionAndDocuments('collections',collectionsArray.map(({title,items})=>({title,items})));
    });
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
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/signin" render={()=>this.props.currentUser ? <Redirect to="/"/>:(<SignInAndSignUpPage/>)} />
        <Route exact path="/checkout" component={CheckOutPage} />
      </Switch>
    </div>
  );
}
}
/*curentuser kaha say milrha isko*/
const mapToStateProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  //collectionsArray:selectCollectionsForPreview
})
//is say kia hta
const mapDispatchProps= dispatch =>({
setCurrentUser:user=> dispatch(setCurrentUser(user))
})
export default connect(mapToStateProps,mapDispatchProps)(App);
 