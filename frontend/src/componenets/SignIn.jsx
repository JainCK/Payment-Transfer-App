import React, { useState } from 'react'
import axios from 'axios'
import '../index.css'

const SignIn = () => {

    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName:'',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }




  return (
    <>
    <div className='flex justify-center items-center h-screen bg-gray-500'>
    <div className='w-96 p-6 shadow-lg bg-white rounded-md'>
            <h1>SignUp</h1>
            <hr className='mt-3'/>
            <div className='mt-3'>
                <label htmlFor="username" className='block text-base mb-2'>Username</label>
                <input type="text" id='username' className='border w-full text-base px-2 py-1 focus: outline-none focus:ring-0 focus:border-gray-600' placeholder='email'/>
            </div>
        </div>
    </div>
       
    </>
  )
}

export default SignIn