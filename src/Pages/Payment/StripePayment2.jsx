import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm2 from "./CheckoutForm2";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useCart from "../../hooks/useCart";

const stripePromise = loadStripe('pk_test_51PWpysKLk0U02GmcZ4c2QHEhiEFhrOk32YxBmpc0j0K1g8LkKT6cPk7f1rCSAZrsTHJPUftkmoGBV0pjnz3MBXFM00rtxJsFH4')
const StripePayment2 = () => {
    const axiosPublic = useAxiosPublic()
    const [cart] = useCart()
    // console.log(cart);
    const totalPrice = cart?.reduce((sum, item)=> sum + item.price, 0)
    // console.log(totalPrice);
    // const [clientSecret, setClientSecret] = useState('')
    const {data:clientSecret}= useQuery({
       queryKey: ['clientSecret'],
       queryFn: async()=>{
        const res = await axiosPublic.post('/create-payment-intent', {totalPrice})
        return res.data.clientSecret;
       } 
    })
    const options = {
        clientSecret,
    }
    console.log(clientSecret);
    return (
        <Elements stripe={stripePromise} >
           <CheckoutForm2 clientSecret={clientSecret} ></CheckoutForm2>
        </Elements>
    );
};

export default StripePayment2;