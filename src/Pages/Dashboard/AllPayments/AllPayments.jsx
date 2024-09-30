import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AllPayments = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { data: payments = [], refetch } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/payments`)
            return data
        }
    })
    const handlePaymentRefund = async(trxID) =>{
        
        const {data} = await  axiosPublic.get(`/bkash/payment/refund/${trxID}`)
        if(data.message === 'success'){
            refetch()
        }
        console.log(data);
    }

     
    return (
        <div className="px-10 ">
            <h3>Total Payments: {payments.length} </h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Price </th>
                            <th>Transaction Id</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            payments.map((payment, idx) => <tr key={payment._id} className="">

                                <th> {idx + 1} </th>
                                <td> {payment.price} </td>
                                <td> {payment.transactionId} </td>
                                <td> {payment.paymentStatus} </td>
                                <td>
                                    {
                                        payment.paymentStatus === 'Success' && payment.paymentMethod === 'bKash' && <button onClick={()=>handlePaymentRefund(payment.transactionId
                                        ) } className='btn'>Refund</button>
                                    }
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllPayments;