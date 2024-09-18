import { CardCvcElement, CardElement, CardExpiryElement, CardNumberElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { BsCreditCard2FrontFill, BsFillCreditCard2FrontFill } from 'react-icons/bs';
import useCart from '../../hooks/useCart';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckoutForm4 = ({ clientSecret, totalPrice }) => {
    const stripe = useStripe()
    const elements = useElements()
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const [cart, refetch] = useCart()
    const navigate = useNavigate()
    
    //    const [clientSecret, setClientSecret] = useState(null)
    const handlePaymentSubit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardNumberElement)
        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card,
                billing_details: {
                    name: 'Customer Name'
                }
            }
        })
        if (error) {
            console.log(error.message);
        } else if (paymentIntent.status === 'succeeded') {
            const payment ={
                email: user?.email,
                products: cart.length,
                price: totalPrice,
                ids: cart.map(singleCart => singleCart._id) ,
                cartIds: cart.map(singleProduct => singleProduct.cartId)  ,
                transactionId: paymentIntent.id  ,
                status: 'Pending'

             }
             console.log(payment);
             axiosSecure.post('/payments', payment)
             .then(res => {
                console.log(res.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your payment has been completed",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  
                  navigate('/dashboard/paymentSuccess')
                  refetch()

             })

                
        }
    }
    return (
        <form onSubmit={handlePaymentSubit} >

            <div className='flex gap-3 items-center'>
                <div className='w-[480px] border rounded-md p-3 relative'>
                    <div className='relative '>
                        <div className='relative flex items-center  '>
                            <CardNumberElement className='w-full ml-6 ' options={{ placeholder: 'Card Number' }} ></CardNumberElement>
                            <BsFillCreditCard2FrontFill className='absolute text-xl ' />
                        </div>
                    </div>
                </div>
                <div className='w-full flex border rounded-md px-2 py-3  '>
                    <div className='w-full '>
                        <CardExpiryElement className='' />

                    </div>
                    <div className='w-full -ml-28'>
                        <CardCvcElement></CardCvcElement>
                    </div>
                </div>

            </div>

            <button className='px-36 py-2 my-6 rounded-md hover:bg-[#4509c5] bg-[#570DF8] text-white' disabled={!stripe}>Pay</button>
        </form>
    );
};

export default CheckoutForm4;