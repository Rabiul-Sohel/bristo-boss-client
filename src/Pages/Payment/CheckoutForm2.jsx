import { CardElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const CheckoutForm2 = ({clientSecret}) => {
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState('')
    const {user} = useAuth()
    // console.log();
    
    const handleSubmit = async(event) =>{
        event.preventDefault()
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
            
        })
        if(error){
            console.log(['error'], error);
            setError(error.message)
        } else {
            console.log( ['payment method'], paymentMethod);
            setError('')

        }
        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.name || 'anonymous'
                } 
            }
        })
        if(confirmError){
            console.log('confirmError', confirmError);
        } else {
            console.log('paymentIntent', paymentIntent);
        }

    }


    return (
        <div className='min-h-screen flex items-center'>
            <form className='w-1/2 mx-auto mt-5 border text-center space-y-2' onSubmit={handleSubmit}>
            <CardElement className='border' options={{
                hidePostalCode: true,
                style:{
                    base: {
                        color: '#424770',
                        '::placeholder':{
                            color: '#aa7b45'
                        }
                    },
                    invalid: {
                        color: '#9e2146'
                    }
                }
            }}></CardElement>
            <button className='btn btn-sm'>Submit</button>
            <p className='text-red-500'>{error}</p>
        </form>
        </div>
    );
};

export default CheckoutForm2;