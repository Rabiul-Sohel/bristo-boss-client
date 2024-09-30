import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import errorImg from '../../assets/error-icon-25243.png'


const PaymentFailed = () => {
    const [searchParams]  = useSearchParams()
    const message = searchParams.get('message')
    console.log(message);
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card card-compact bg-base-100 w-96  shadow-xl">
                <img className=' rounded-full w-36 mx-auto mt-6' src={errorImg} alt="" />
                <div className=" text-center p-5 shadow-xl space-y-4">
                    <h2 className="text-3xl text-center"> Sorry </h2>
                    <p>Payment {message} </p>
                    <div className="card-actions  justify-center">
                        <Link to='/dashboard/cart' className="btn btn-primary">Go to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentFailed;