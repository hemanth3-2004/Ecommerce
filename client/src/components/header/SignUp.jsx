import React from 'react'
import { useNavigate } from 'react-router-dom';
function SignUpPage() {
      const navigate = useNavigate();
    
  return (
     <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-custom via-yellow-200 to-white">
      <div className="bg-white w-full max-w-md p-5 rounded-md shadow-2xl"> 

        <h2 className="text-2xl font-bold text-gray-700 text-center pt-3 pb-3">Sign Up</h2>

        <form className="flex flex-col items-center justify-between gap-5 pb-2">
          <div>
            <input 
              type="name" 
              id="name" 
              className="border border-gray-400 focus:outline-blue-400 px-3 py-2 rounded-md w-[20em] max-w-full hover:border-gray-700 hover:placeholder:text-gray-700"
              placeholder="Name" 
              required 
            />
          </div>

          <div>
            <input 
              type="text" 
              id="number" 
              className="border border-gray-400 focus:outline-blue-400 px-3 py-2 rounded-md w-[20em] max-w-full hover:border-gray-700 hover:placeholder:text-gray-700"
              placeholder="Phone Number" 
              required 
            />
          </div>

            <div>
            <input 
              type="username" 
              id="userName" 
              className="border border-gray-400 focus:outline-blue-400 px-3 py-2 rounded-md w-[20em] max-w-full hover:border-gray-700 hover:placeholder:text-gray-700"
              placeholder="Username" 
              required 
            />
          </div>

            <div>
            <input 
              type="password" 
              id="password" 
              className="border border-gray-400 focus:outline-blue-400 px-3 py-2 rounded-md w-[20em] max-w-full hover:border-gray-700 hover:placeholder:text-gray-700"
              placeholder="Password" 
              required 
            />
          </div>

            <div>
            <input 
              type="confirm_password" 
              id="confirm_password" 
              className="border border-gray-400 focus:outline-blue-400 px-3 py-2 rounded-md w-[20em] max-w-full hover:border-gray-700 hover:placeholder:text-gray-700"
              placeholder="Confirm password" 
              required 
            />
          </div>
        </form>

        <div className="flex items-center justify-center gap-4 p-3">
          <button className="text-white font-bold bg-blue-400 px-8 py-2 rounded-md cursor-pointer hover:bg-blue-500">Sign Up</button>
          <button className="border border-blue-500 text-blue-500 bg-white px-8 py-2 rounded-md hover:bg-blue-50 cursor-pointer">Cancel</button>
        </div>

        <div className="flex ml-11">
          <h2>Already Registered?</h2>
          <span className="text-blue-500 cursor-pointer hover:underline ml-1" onClick={()=>navigate("/signIn")}>SignIn</span>
        </div>


      </div>
    </div>
  )
}

export default SignUpPage;
