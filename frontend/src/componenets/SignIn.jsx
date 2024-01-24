import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../index.css'

const SignIn = () => {
  return (
    <>
    <div className='flex justify-center items-center h-screen bg-gray-500'>
    <div className='w-1/4 p-6 shadow-lg bg-white rounded-md'>
            <h1 className='text-center font-extrabold text-3xl'>Sign In</h1>
            <p className='text-center text-lg mt-3 text-gray-500'>Enter your credentials to access your account</p>
            <hr className='mt-3'/>
            <div className='mt-3'>
                <label htmlFor="email" className='block text-base mb-2 font-bold'>Email</label>
                <input type="text" id='email' className='border w-full text-base px-2 py-1 focus: outline-none focus:ring-0 focus:border-gray-600' placeholder='johndoe@example.com'/>
            </div>
            <div className='mt-3'>
                <label htmlFor="password" className='block text-base mb-2 font-bold'>Password</label>
                <input type="text" id='password' className='border w-full text-base px-2 py-1 focus: outline-none focus:ring-0 focus:border-gray-600' placeholder=''/>
            </div>
            <div className='mt-5'>
                <button className='w-full bg-black text-white rounded-md h-10'>Sign In</button>
            </div>
            <div className='mt-3'>
                <p className='text-center font-semibold'>
                    Don't have an account? Sign Up
                </p>
            </div>
        </div>
    </div>
       
    </>
  )
}

export default SignIn