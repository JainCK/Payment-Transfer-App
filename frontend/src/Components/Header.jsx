import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
        <h1 className='my-5 mx-5 font-bold text-2xl'>Payments App</h1>
        <div>
            <h2 className='flex text-xl font-semibold mr-10'>Hello,User</h2>   
        </div>
    </div>
  )
}

export default Header