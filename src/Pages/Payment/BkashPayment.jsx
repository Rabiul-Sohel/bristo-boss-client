import React from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';

const BkashPayment = () => {
    const {user} = useAuth()
    const [cart] = useCart()
    const totalPrice = cart.reduce((sum, item)=> sum + item.price, 0)
    // console.log(totalPrice);
    const axiosSecure = useAxiosPublic()
    const handleBkashPayment = async() =>{
        const payment ={
            email: user?.email,
            products: cart.length,
            price: Math.round(totalPrice),
            paymentMethod: 'bKash',
            deliverStatus: 'Pending',
            cartIds: cart.map(singleCart => singleCart._id) ,
            menuIds: cart.map(singleProduct => singleProduct.menuId)  ,
            // transactionId: paymentIntent.id  ,
            paymentStatus: 'Success'

         }
        //  console.log(payment);
        try{
            const {data} = await axiosSecure.post('/bkash/payment/create', payment)
            console.log(data);
            window.location.href = data.bkashURL;
          } catch(err) {
            console.log(err.message); 
          }
    }
    return (
        <div>
            <button onClick={handleBkashPayment} className="bg-pink-500 hover:bg-pink-600 text-white px-40 py-2 rounded-md">bKash Pay</button>
        </div>
    );
};

export default BkashPayment;