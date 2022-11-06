import React, { useState } from 'react'

const SingIn = () => {
  const [login,setLogin] = useState(true);
  return (
    <>
      {/* Register */}
      {
        !login && 
        <>
           <div className="my-5 w-6/12 mx-auto">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-blue-50 px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />
                    <input type="password" className="block border border-grey-light w-full p-3 rounded mb-4" name="password" placeholder="Password" />
                    <button className="w-full text-white bg-green-600 px-5 py-2 rounded-md">Create Account</button>
                    <div className="text-grey-dark mt-6">
                        Already have an account ? 
                        <button onClick={()=>{setLogin(true)}} className="hover:underline mx-2 hover:text-red-900 no-underline border-b border-blue text-blue" href="../login/">
                            Log in
                        </button>
                    </div>
                </div>
              
            </div>
           </div>
        </>
      }
      
      {/* login */}

      {
        login && 
        <>
            <div className="relative  min-h-screen  sm:flex sm:flex-row  justify-center bg-transparent rounded-3xl shadow-xl">
                <div className="flex justify-center bg-slate-400  self-center  z-10">
                  <div className="p-12 bg-white mx-auto rounded-3xl w-96 ">
                    <div className="mb-7">
                      <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
                      <p className="text-gray-400">Don'thave an account? 
                      <button onClick={()=>{setLogin(false)}} className="text-sm text-purple-700 hover:underline hover:text-purple-700">Sign Up</button></p>
                    </div>
                    <div className="space-y-6">
                      <div className="">
                            <input className=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400" type="" placeholder="Email"/>
                      </div>
                        <div className="relative" x-data="{ show: true }">
                          <input placeholder="Password" className="text-sm text-gray-200 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400"/>
                          <div className="flex items-center absolute inset-y-0 right-0 mr-3  text-sm leading-5">
                          </div>
                        </div>
                        <div>
                          <button className='bg-green-700 text-white font-bold px-10 w-full py-2 rounded-md'>Sign in</button>
                        </div>
                        <div className="flex items-center justify-center space-x-2 my-5">
                          <span className="h-px w-16 bg-gray-100"></span>
                          <span className="text-gray-600 font-normal">or</span>
                          <span className="h-px w-16 bg-gray-100"></span>
                        </div>
                        <div className="flex justify-center gap-5 w-full ">
                          <button type="submit" className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:bg-slate-300 text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500">
                            <svg  className="w-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"/><path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"/><path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"/><path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"/></svg>
                                <span>Google</span>
                            </button>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </>
      }
    </>
  )
}

export default SingIn