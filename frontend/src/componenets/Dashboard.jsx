import React from 'react'

const Dashboard = () => {
  return (
    <>
        <div className='h-screen'>
        <div className='mt-5 flex justify-between'>
            <h1 className='ml-10 font-bold text-3xl'>Payments App</h1>
            <div>
            <h2 className='flex text-2xl font-semibold mr-10'>Hello,User</h2>   
            </div>
        </div>
        <div className='my-5 border '>
            <h2 className='font-bold text-2xl ml-10'>Your Balance: </h2>
        </div>  
        <div className='my-5 border'>
            <h2 className='font-bold text-2xl ml-10'>Users</h2>
            <input type="text" class="h-8 w-4/5 mx-10 mt-5 border-slate-700 rounded text-lg" placeholder="Search Users..." />
        </div>  

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
    </>
  )
}

export default Dashboard