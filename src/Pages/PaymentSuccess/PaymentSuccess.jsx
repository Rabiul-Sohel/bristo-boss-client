import React from 'react';
import successImg from '../../assets/success.png'
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card card-compact bg-base-100 w-96  shadow-xl">
                <img className=' rounded-full w-36 mx-auto mt-6' src={successImg} alt="" />
                <div className=" text-center p-5 shadow-xl space-y-4">
                    <h2 className="text-3xl text-center"> Payment successful</h2>
                    <p>Thank you for choosing us </p>
                    <div className="card-actions  justify-center">
                        <Link to='/dashboard/paymentHistory' className="btn btn-primary">Go to Payment History</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;