import {
  CardCvcElement,
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const axiosPublic = useAxiosPublic()
  const [cart, refetch] = useCart()
  const { user } = useAuth()
  const navigate = useNavigate()
  const totalPrice = (cart?.reduce((sum, item) => sum + item.price, 0)).toFixed(2)
  console.log(totalPrice);
  useEffect(() => {
    if(totalPrice > 0){
      axiosPublic.post('/create-payment-intent', { totalPrice })
      .then(res => {
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
      })
    }
  }, [axiosPublic, totalPrice])


  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement)
    // console.log(card);
    if (card === null) {
      return
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })
    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[paymentMethod]', paymentMethod);
    }
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anynomous',
          name: user?.displayName || 'anynomous'
        }
      }
    })
    if (confirmError) {
      console.log('confirmError', confirmError);
    } else {
      console.log('paymentIntent', paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        setTransactionId(paymentIntent.id)
        const payment  = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), // utc date convert. use moment js to convert
          cartIds: cart.map(item => item._id),
          menuIds: cart.map(item => item.cartId),
          status: 'pending'
        }
         await axiosPublic.post('/payments', payment)
         .then(res => {
          console.log(res.data)

          refetch()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/dashboard/paymentHistory')

        })
        

      }
    }



  };


  return (
    <div>
      <form className="w-1/2 mx-auto" onSubmit={handleSubmit}>
        <CardElement options={{ hidePostalCode: true }} className="border"></CardElement>
        <button disabled={!stripe || !clientSecret} className="btn btn-primary btn-sm">Pay</button>
      </form>
      <p> {transactionId} </p>
    </div>
  );
};

export default CheckoutForm;
