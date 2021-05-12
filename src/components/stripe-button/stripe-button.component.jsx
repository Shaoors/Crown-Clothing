import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe= price*100;
    const publishableKey='pk_test_51IqEDEAALXpSzHNLeCexIUSk9JFcRKsQnJ3qWLhdUlHSIGzG4cqDnvnIubTYyyG2kH4Cou99Ud2yGdlvi5tLSaBy00JSe07Hme';
    const onToken=token=>{
        console.log(token);
        alert('Payement Successful');
    }
    return (
        <StripeCheckout
        label='Pay Now'
        name='Crown Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your Total is $${price}`}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey} 
        />  
      );
}
 
export default StripeCheckoutButton;