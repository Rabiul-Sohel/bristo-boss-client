import React from 'react';
import Cover from '../Shared/Cover/Cover';
import contactBannerImg from '../../assets/contact/banner.jpg'
import SectionTitle from '../../components/SectionTitle';
import { FaPhoneVolume } from 'react-icons/fa6';
import { MdLocationPin } from 'react-icons/md';
import { GoClockFill } from 'react-icons/go';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaPaperPlane } from 'react-icons/fa';
import { useRef } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import GoldenButton from '../Shared/GoldenButton/GoldenButton';

const ContactUs = () => {
    const form = useRef()
    const { user } = useAuth()
    const navigate = useNavigate()
    const handleReCapcha = (value) => {
        console.log(value);
    }
    const handleSendMessage = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, form.current, {
                publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY
            })
            .then(() => {
                Swal.fire({
                    title: "Thank You!",
                    text: "Your message has been send!",
                    icon: "success"
                });
                navigate('/')
            }, (error) => {
                console.log(error.text);
            })
    }
    return (
        <div className='mb-20'>
            <Cover
                img={contactBannerImg}
                title="Contact Us"
                description="Would you like to try a dish?"
            ></Cover>
            <div>
                <SectionTitle
                    heading='Our Location'
                    subHeading='Visit Us'
                ></SectionTitle>
                <div className='flex justify-center w-3/4 mx-auto gap-5 mb-20 text-black'>
                    <div className=' w-96 mx-auto text-center border-[0.1px]'>
                        <div className='bg-[#D1A054] py-3 text-white text-center'>
                            <FaPhoneVolume className='mx-auto text-xl '></FaPhoneVolume>
                        </div>
                        <div className='h-60 px-6 pb-6'>
                            <div className='bg-[#F3F3F3] h-full pt-10'>
                                <h4 className='uppercase font-semibold'>Phone</h4>
                                <p>+38 (012) 34 56 789</p>
                            </div>
                        </div>
                    </div>
                    <div className=' w-96 mx-auto text-center border'>
                        <div className='bg-[#D1A054] py-3 text-white text-center'>
                            <MdLocationPin className='mx-auto text-2xl'></MdLocationPin>
                        </div>
                        <div className='h-60 px-6 pb-6'>
                            <div className='bg-[#F3F3F3] h-full pt-10'>
                                <h4 className='uppercase font-semibold'>Address</h4>
                                <p>+38 (012) 34 56 789</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-96 mx-auto text-center border'>
                        <div className='bg-[#D1A054] py-3 text-white text-center'>
                            <GoClockFill className='mx-auto text-xl'></GoClockFill>
                        </div>
                        <div className='h-60 px-6 pb-6'>
                            <div className='bg-[#F3F3F3] text-black h-full pt-10'>
                                <h4 className='uppercase font-semibold'>Working Hours</h4>
                                <p>Mon - Fri: 08:00 - 22:00 <br />
                                    Sat - Sun: 10:00 - 23:00</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div>
                <SectionTitle
                    heading='Contact Form'
                    subHeading='Send Us a Message'
                ></SectionTitle>
                <form ref={form} onSubmit={handleSendMessage} >
                    <div className='grid grid-cols-2 gap-5  w-3/4 bg-[#F3F3F3] p-14  mx-auto '>
                        <div className='w- full col-span-1 space-y-2'>
                            <label htmlFor="">Name*</label>
                            <input name='name' placeholder='Enter your name' className='w-full p-3 rounded-md' type="text" />
                        </div>
                        <div className='col-span-1 space-y-2'>
                            <label htmlFor="">Email*</label>
                            <input defaultValue={user?.email} name='email' placeholder='Enter your email' className='w-full p-3 rounded-md' type="text" />
                        </div>
                        <div className='col-span-2 space-y-2'>
                            <label htmlFor="">Phone*</label>
                            <input name='phone' placeholder='Enter your phone' className='w-full p-3 rounded-md' type="text" />
                        </div>
                        <div className='col-span-2 space-y-2'>
                            <label htmlFor="">Message*</label>
                            <textarea placeholder='Write your message here' className='w-full p-3 rounded min-h-52' name="message" ></textarea>
                        </div>
                        <div className='col-span-2 '>
                            <ReCAPTCHA

                                sitekey={import.meta.env.VITE_Recapcha_Site_Key}
                                onChange={handleReCapcha}
                            ></ReCAPTCHA>
                        </div>
                        <div className='col-span-2 flex justify-center  '>
                            
                                <GoldenButton text='Send Message'>
                                    <FaPaperPlane></FaPaperPlane>
                                </GoldenButton>
                            
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ContactUs;