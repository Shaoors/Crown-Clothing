import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect"
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selector"
import {LogoConatiner,HeaderConatiner,OptionsConatners,OptionLink} from "./header.styles.jsx"
import CartDropDown from "../cart-dropdown/cart-dropdown.component"
import { ReactComponent as Logo } from "../../assets/crown.svg";
import {auth} from "../../firebase/firebase.utils"
import CartIcon from "../cart-icon/cart-icon-compnonent";
const Header = ({currentUser, hidden}) => (
  <HeaderConatiner>
    <LogoConatiner to="/">
      <Logo className="logo" />
    </LogoConatiner>
    <OptionsConatners>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/shop">
        CONTACT
      </OptionLink>
      {
        currentUser ?
        <OptionLink as='div' onClick={()=>auth.signOut()}>SIGN OUT</OptionLink >
        :
        <OptionLink to="/signin">SIGN IN</OptionLink>
      }
      <CartIcon/>
    </OptionsConatners>
    { hidden? null:
    <CartDropDown/>}
  </HeaderConatiner>
);
// state ke jga () dal k error q ata
// const mapStateToProps = (state) =>({
//   currentUser: state.user.currentUser
// })
// //create structure say pele
//  const mapStateToProps = (state) =>({
//    currentUser:selectCurrentUser(state),
//    hidden:selectCartHidden(state)
//  });

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
});
export default connect(mapStateToProps)(Header);
