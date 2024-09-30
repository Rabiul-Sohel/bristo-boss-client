import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';

const MyBooking = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const {data:userBookings=[]} = useQuery({
        queryKey:['bookings'],
        queryFn: async() =>{
            const response = await axiosSecure.get(`/bookings?email=${user?.email}`)
            return response.data
        }
    })
    console.log(userBookings);
    return (
        <div>
            this is my booking page 
        </div>
    );
};

export default MyBooking;