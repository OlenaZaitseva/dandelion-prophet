import React from 'react';
import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_E3zdUZEjLCNP22Mv4fOi90IX00saEdLiWg';
const onToken = token => {
    console.log('token');
    alert('Payment Successful')
};
return(
    <StripeCheckout
    label='Pay Now'
    name='Dandelion Prophet'
    billingAdress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    />
)

}
export default StripeCheckoutButton;