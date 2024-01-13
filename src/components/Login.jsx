import React, { useState } from 'react'
import {auth} from '../Firebase'
import {GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();

  const submitHandler = async (e) =>{
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log(user)
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  }

  const googleClick = async () =>{
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth,provider);
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="h-3/4 shadow-lg px-3 rounded-xl">
      <h1 className="text-4xl text-center py-4  font-semibold">
        React Login Page
      </h1>
      <div>
        <form onSubmit={submitHandler} className="mx-3">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button  type="submit" className="btn btn-primary mx-16 my-3 px-5">
            Login
          </button>
          <Link to="/register"><p className="text-center">Register New User</p></Link>
        </form>
      </div>
      <div className="text-center m-4 flex items-center justify-center">
        <button onClick={googleClick} className="flex items-center justify-center gap-x-1 bg-white px-3 py-1 rounded-md">
          <div>
            <img className="w-9" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
          </div>
          <div>
            <h1 className="text-red-600 font-bold text-xl">Login with google</h1>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Login;
