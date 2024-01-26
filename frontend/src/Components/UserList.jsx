import React from 'react'

const UserList = () => {
  return (
    <div>
         <div className='my-10 border '>
        <ul className='my-10'>
            <li className='flex items-center justify-between my-5'>
            <div className='flex items-center ml-10'>
                <span className='text-xl font-bold mr-2'>U1</span>
                <h3 className='text-xl font-bold'>User 1</h3>
            </div>
            <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mr-10'>Send Money</button>
             </li>
             <li className='flex items-center justify-between my-5'>
            <div className='flex items-center ml-10'>
                <span className='text-xl font-bold mr-2'>U2</span>
                <h3 className='text-xl font-bold'>User 3</h3>
            </div>
            <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mr-10'>Send Money</button>
             </li>
             <li className='flex items-center justify-between my-5'>
            <div className='flex items-center ml-10'>
                <span className='text-xl font-bold mr-2'>U3</span>
                <h3 className='text-xl font-bold'>User 3</h3>
            </div>
            <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mr-10'>Send Money</button>
             </li>
        </ul>
    </div>
    </div>
  )
}

export default UserList