import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckoutForm3 from './CheckoutForm3';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PWpysKLk0U02GmcZ4c2QHEhiEFhrOk32YxBmpc0j0K1g8LkKT6cPk7f1rCSAZrsTHJPUftkmoGBV0pjnz3MBXFM00rtxJsFH4')
const StripePayment3 = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm3></CheckoutForm3>
            </Elements>
        </div>
    );
};

export default StripePayment3;