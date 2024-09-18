import { useState } from 'react';
import creditImg from '../../assets/icon/credit-card 1.png'
import sslImg from '../../assets/icon/icon-256x256.png'
// import StripePayment3 from './stripePayment3';
import { useLocation } from 'react-router-dom';
import StripePayment2 from './StripePayment2';
import StripePayment4 from './StripePayment4';
import StripePayment3 from './StripePayment3';
import PaymetButton from './SSLCommerz/PaymentButton';
const Payment = ({  }) => {
    const [paymentMethod, setPaymentMethod] = useState(null)
    const location = useLocation()
    const amount = location.state
    // const productIds = cart.map(product => product._id)
    // console.log(amount);
    return (
        <div className="flex min-h-screen justify-center items-center">
            <div className='text-center space-y-5'>
                <h5 className="text-3xl">PAYMENT</h5>
                <div className="flex gap-8 justify-center">
                    <div className='flex items-center gap-2'>
                        <input onClick={(e)=>setPaymentMethod(e.target.value)} type="radio" name="paymentMethod" value='Credit Card' />
                        <img className='w-8' src={creditImg} alt="" />
                        <span>Credit Card</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input onClick={(e)=>setPaymentMethod(e.target.value)} type="radio" name="paymentMethod" value='SSL Commerz' />
                        <img className='w-6' src={sslImg} alt="" />
                        <span>SSLCommerz</span>
                    </div>
                    
                </div>
                {
                    paymentMethod === 'Credit Card' && <StripePayment4 amount={amount}></StripePayment4>
                }
                {
                    paymentMethod === 'SSL Commerz' && <PaymetButton amount={amount}></PaymetButton>
                }
            </div>
        </div>
    );
};

export default Payment;