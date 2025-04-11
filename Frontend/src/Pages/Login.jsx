import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios"
import { useAuth } from '../context api/authContext';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [auth, setAuth] = useAuth()
  const location = useLocation()

    //handle Submit Form
    const handleSubmitForm = async(e) =>{
      e.preventDefault()
  
      //TO GET REGISTERED DATA FOR LOGIN FRONTEND FROM BACKEND DATABASE
      try {
        const reciveData = await axios.post(`http://localhost:8000/api/v1/auth/login`,{ email, password})
        if (reciveData?.data?.success) {
          
          setAuth({
            user: reciveData.data.user,  
            token: reciveData.data.token 
          });
    
          localStorage.setItem('auth', JSON.stringify({
            user: reciveData.data.user,
            token: reciveData.data.token
          }));

          toast.success("Welcome, happy to see you here again !")
          navigate( location.state || "/products");
        }
          
        
      } catch (error) {
        console.log(`ERROR IN LOGIN : ${error}`)
      }
  
      console.log(email,password)
    }

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-20 bg-slate-200 h-screen flex justify-center items-center text-black">
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
              <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                <h2 className="text-3xl font-bold leading-tight text-blue-500 sm:text-4xl">
                  Log in
                </h2>
                <p className="mt-2 text-sm text-gray-400">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    title
                    className="font-semibold text-blue-900 transition-all duration-200 hover:underline"
                  >
                    Create a free account
                  </Link>
                </p>
                <form onSubmit={handleSubmitForm} name='login' action="#" method="POST" className="mt-8">
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor
                        className="text-base font-medium text-blue-800"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:bg-white bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="email"
                          placeholder="Registered Email"
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor
                          className="text-base font-medium text-blue-800"
                        >
                          Password
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:bg-white bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e)=>setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                      >
                        LOG IN
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="h-full w-full">
              <img
                className="mx-auto h-[500px] m-5 rounded-md object-cover"
                src="https://i.imgur.com/QkIa5tT.jpeg"
                alt="img"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
