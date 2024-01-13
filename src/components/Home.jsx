import { getAuth } from 'firebase/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom';


const Home = () => {
  console.log(getAuth());
  const auth = getAuth();

  const navigate = useNavigate();

  const logOut = async () =>{
    await auth.signOut(); 
    navigate('/')
  }

  return (
    <>
    <div className='flex-none text-center'>

    <h1 className='text-4xl my-4'>👋🏼 Welcome</h1>
    <div>
      <h1 className='text-2xl mb-1'>{auth.currentUser.displayName}</h1>
      <h1 className='text-2xl mb-1'>{auth.currentUser.email}</h1>
      {/* <img src={auth.currentUser.photoURL} alt="" /> */}
    </div>
    <button onClick={logOut} className='bg-red-600 p-1 px-2 my-9 text-white'>Logout</button>
    </div>
    </>
  )
}

export default Home