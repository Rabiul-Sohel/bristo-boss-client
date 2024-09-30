import { PiClipboardTextFill } from "react-icons/pi";
import SectionTitle from "../../../components/SectionTitle";
import GoldenButton from "../../Shared/GoldenButton/GoldenButton";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { GoClockFill } from "react-icons/go";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Reservation = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()
    const handleAddBooking = async(data) =>{
        const response = await axiosSecure.post('/bookings', data)
        if(response.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Thank you for your booking",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/dashboard/userBooking')
        }
        // console.log(response.data);
    }
    return (
        <div className="px-10">
            <div>
                <SectionTitle
                    heading='Book a Table'
                    subHeading='Resevation'
                ></SectionTitle>
                <form onSubmit={handleSubmit(handleAddBooking)} >
                    <div className="grid grid-cols-3 gap-5">
                        <div className="space-y-2 col-span-1">
                            <label className="text-xl font-semibold" > Date*</label>
                            <input {...register('date',{required: 'Date is required'})} className="w-full p-4 border rounded-lg" type="date" />
                        </div>
                        <div className="space-y-2 col-span-1">
                            <label className="text-xl font-semibold" > Time*</label>
                            <input {...register('time',{required: 'time is required'})}  className="w-full p-4 border rounded-lg" type="time" />
                        </div>
                        <div className="space-y-2 col-span-1">
                            <label className="text-xl font-semibold" > Guest*</label>
                            <select {...register('guest',{required: 'guest is required'})} className="w-full p-4 border rounded-lg" >
                                <option value="1">1 Person</option>
                                <option value="2">2 Person</option>
                                <option value="3">3 Person</option>
                                <option value="4">4 Person</option>
                                <option value="5">5 Person</option>
                            </select>
                        </div>
                        <div className="space-y-2 col-span-1">
                            <label className="text-xl font-semibold" > Name*</label>
                            <input {...register('name',{required: 'name is required'})} className="w-full p-4 border rounded-lg" placeholder="Your Name" type="text" />
                        </div>
                        <div className="space-y-2 col-span-1">
                            <label className="text-xl font-semibold" > Phone*</label>
                            <input {...register('phone',{required: 'phone is required'})} className="w-full p-4 border rounded-lg" placeholder="Phone Number" type="text" />
                        </div>
                        <div className="space-y-2 col-span-1">
                            <label className="text-xl font-semibold" > Email*</label>
                            <input defaultValue={user?.email} {...register('email',{required: 'email is required'})} className="w-full p-4 border rounded-lg" placeholder="Email" type="eamil" />
                        </div>

                    </div>
                    <div className="flex justify-center mt-5">
                        <GoldenButton text='Book A Table'>
                            <PiClipboardTextFill />
                        </GoldenButton>
                    </div>
                </form>

            </div>
            <div className="pt-10">
                <SectionTitle
                    heading='Our Location'
                    subHeading='Visit Us'
                >
                </SectionTitle>
                <div className=' lg:flex space-y-5 lg:space-y-0 justify-center  mx-auto mt-10 mb-20 text-black'>
                    <div className=' w-full text-center '>
                        <div className='bg-[#D1A054] lg:mr-1 py-3 text-white text-center'>
                            <FaPhoneVolume className='mx-auto text-xl '></FaPhoneVolume>
                        </div>
                        <div className='h-60 '>
                            <div className='bg-[#F3F3F3] h-full pt-10'>
                                <h4 className='uppercase font-semibold'>Phone</h4>
                                <p>+38 (012) 34 56 789</p>
                            </div>
                        </div>
                    </div>
                    <div className=' w-full  text-center '>
                        <div className='bg-[#D1A054] py-3 text-white text-center'>
                            <MdLocationPin className='mx-auto text-xl'></MdLocationPin>
                        </div>
                        <div className='h-60 '>
                            <div className='bg-[#F3F3F3] h-full pt-10'>
                                <h4 className='uppercase font-semibold'>Address</h4>
                                <p>+38 (012) 34 56 789</p>
                            </div>
                        </div>
                    </div>
                    <div className=' w-full text-center '>
                        <div className='bg-[#D1A054] lg:ml-1 py-3 text-white text-center'>
                            <GoClockFill className='mx-auto text-xl'></GoClockFill>
                        </div>
                        <div className='h-60'>
                            <div className='bg-[#F3F3F3] text-black h-full pt-10'>
                                <h4 className='uppercase font-semibold'>Working Hours</h4>
                                <p>Mon - Fri: 08:00 - 22:00 <br />
                                    Sat - Sun: 10:00 - 23:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Reservation;