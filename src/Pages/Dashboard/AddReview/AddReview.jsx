import React, { useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import GoldenButton from '../../Shared/GoldenButton/GoldenButton';
import { HiMiniRocketLaunch } from 'react-icons/hi2';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import demoImg from '../../../assets/Group 7.png'

const AddReview = () => {
    const {user} = useAuth()
    const [rating, setRating] = useState(0)
    const [hoverRating, setHoverRating] = useState(0)
    const totalStars = 5;
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const starArray = Array.from({ length: totalStars }, (v, i) => i + 1)
    // console.log(rating);
    const {
        register,
        reset,
        handleSubmit,
        formState: {errors} 
    } = useForm()
    const handleReview = async(data) =>{
        data.rating = rating
        data.email = user?.email 
        data.name = user?.displayName
        const response = await axiosSecure.post('/reviews', data)
        if(response.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Thank You for your valuable Review",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/dashboard/userHome')
        }
        console.log(response);
    }
    // [#F3F3F3]

    return (
        <div className='mb-20 '>
            <SectionTitle
                heading='Give a Review'
                subHeading='Sharing is Caring!!!'
            ></SectionTitle>
            <div className='bg-[#F3F3F3] p-8 mx-20 rounded-sm '>
                
                <div className='text-center space-y-4'>
                    <h4 className='text-2xl  uppercase font-serif'>Rate Us!</h4>
                    <div className='rating space-x-2'>
                        {
                            starArray.map((star) => (
                                <input
                                    type="radio"
                                    key={star}
                                    value={star}
                                    name='rating'
                                    className={`mask mask-star-2 ${star <= (hoverRating || rating) ? 'bg-orange-500' : 'bg-gray-400'}`}
                                    onClick={() => setRating(star)}
                                    onMouseEnter={() => setHoverRating(star)}
                                    onMouseLeave={() => setHoverRating(0)}
                                />
                            ))
                        }
                    </div>
                </div> 

                <form  onSubmit={handleSubmit(handleReview)} >
                    <div className='w-5/6 mx-auto mt-10 space-y-2 '>
                        <div className='space-y-2'>
                            <label className='font-semibold '>Which recipe you liked most?</label>
                            <input {...register('likedRecipe')} className='w-full p-3 rounded-md dark:text-white' placeholder='Recipe you liked most' type="text" />
                        </div>
                        <div className='space-y-2'>
                            <label className='font-semibold' >Do you have any suggestion for us?</label>
                            <input {...register('suggestion')} className='w-full p-3 rounded-md dark:text-white' placeholder='Suggestion' type="text" />
                        </div>
                        <div className='space-y-2'>
                            <label className='font-semibold' htmlFor="">Kindly express your care in a short way.</label>
                            <textarea {...register('details')} className='w-full rounded-md p-3 min-h-44 ' placeholder='Review in detail' type="text" />
                        </div>
                        <GoldenButton text='Send Review'>
                            <HiMiniRocketLaunch />
                        </GoldenButton>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddReview;