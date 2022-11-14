import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    return (
        <div style={{background:`url(${appointment})`}} className='py-14 bg-cover'>
            <h6 className='text-lg text-secondary font-bold text-center'>Contact Us</h6>
            <h4 className='text-center text-3xl text-white'>Stay connected with us</h4>
            <div>
                <form className='px-4 md:px-10 lg:p-0 lg:w-[400px] mx-auto mt-12'>
                    <input className='block w-full h-10 rounded-lg pl-3 mb-5' type="email" name="" id="" placeholder='Email Address' />
                    <input className='block w-full h-10 rounded-lg pl-3 mb-5' type="text" name="" id="" placeholder='Subject' />
                    <textarea className='block w-full p-3 rounded-lg' name="" id="" rows="3" placeholder='Your Message'></textarea>
                    <div className='flex justify-center mt-5'>
                        <PrimaryButton>Submit</PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;