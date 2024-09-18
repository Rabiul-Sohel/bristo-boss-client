import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const CheckoutForm3 = () => {
    const stripe = useStripe()
    const elements = useElements()
    const axiosPublic = useAxiosPublic()
    const [clientSecret, setClientSecret] = useState('')
    const [cart] = useCart()
    const { user } = useAuth()
    const navigate = useNavigate()
    const totalPrice = (cart?.reduce((sum, item) => sum + item.price, 0))
    const amount = Math.round(totalPrice * 100) /100
    const currency = 'usd'

    useEffect(() => {
        if (cart?.length > 0) {
            axiosPublic.post('/create-payment-intent', {amount})
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosPublic, totalPrice, currency])
    const handlePayment = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        // const { error, paymentMethod } = await stripe.createPaymentMethod({
        //     type: 'card',
        //     card
        // })
        // if (error) {
        //     console.log('error', error);
        // } else {
        //     console.log('paymentMethod', paymentMethod);
        // }

        const { error:confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email
                }
            }
        })
        if (confirmError) {
            console.log('confirmError', confirmError);
        } else {
            console.log('paymentIntent', paymentIntent);
            if(paymentIntent.status === "succeeded"){
                const payment = {
                    email: user.email,
                    price: amount,
                    transactionId: paymentIntent.id,
                    cartIds: cart.map(item => item._id),
                    menuIds: cart.map(item => item.cartId),
                    status: 'pending'

                }
                
                axiosPublic.post('/payments', payment)
                .then(res =>{
                    console.log(res.data);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your payment is successfull",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate('/dashboard/paymentHistory')

                })
                
               
                 

            }
        }

    }
    return (
        <div className="w-1/2 mx-auto mt-5 border p-4 text-center">
            <form className="space-y-4 border" onSubmit={handlePayment}>
                <CardElement className="border">
                </CardElement>
                <button className="btn">Pay</button>
            </form>
        </div>
    );
};

export default CheckoutForm3;