import React, { useState } from 'react'
import {auth} from '../Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();

  const submitHandler = async (e) =>{
    e.preventDefault();

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log(user)
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className=" h-3/5 shadow-lg px-3 rounded-xl">
      <h1 className="text-4xl text-center py-6  font-semibold">
        React Login Page
      </h1>
       <div>
        <form onSubmit={submitHandler}>
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
          <button type="submit" className="btn btn-primary mx-16 my-3 px-5">
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register