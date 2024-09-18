import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm4 from "./CheckoutForm4";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";


const StripePayment4 = ({ amount }) => {
    const [clientSecret, setClientSecret] = useState('')
   
    console.log(clientSecret, amount);
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        axiosSecure.post('payment-intent', { amount })
            .then(res => {
                setClientSecret(res.data.clientSecret);
            })
    }, [])
    const options = {
        clientSecret
    }

    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PUBLISHABLE_KEY)


    return (
        <div>
            <Elements stripe={stripePromise}  >
                {
                    clientSecret && <CheckoutForm4 clientSecret={clientSecret} totalPrice={amount} ></CheckoutForm4>
                }
            </Elements>
        </div>
    );
};

export default StripePayment4;