import React from 'react'

const Transfer = () => {
  return (
    <>
      <div className='flex justify-center items-center h-screen bg-white'>
        <div className='w-96 h-72 rounded shadow-2xl bg-gray-100'>
          <h1 className='text-center font-bold text-3xl mt-5'>Send Money</h1>

          <div className='mt-8 flex items-center'>
            <div className='w-10 h-10 bg-black rounded-full ml-5'></div>
            <h2 className='ml-5 text-xl font-semibold'>Friends Name</h2>
          </div>
          <h3 className='ml-5 mt-3 font-semibold'>Amount in (RS)</h3>
          <div className='flex justify-center'>
          <input type="text" className='border w-11/12 text-base px-2 py-1 mt-2 rounded' placeholder='Enter Amount'/>
          </div>
          <div className='flex justify-center'>
            <button className='w-11/12 mt-2 bg-orange-300 rounded px-2 py-1 font-semibold'>Initiate Transfer</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Transfer