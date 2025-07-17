import axios from "axios";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function SignInPage({onLoginSucces,setDisplayUser}) {
  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    email : "",
    password : "",
  });


    const handleChange = (e) => {
       setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async(e)=> {
    e.preventDefault();

    try{
      const res = await axios.post('http://localhost:5000/logUser',formData);
      if(res.data.success){
        const  user = res.data.user;
        alert(`Welcome ${user.username}!`);
        onLoginSucces(user);
        navigate("/");
      }else{
        alert("Invaid email or password");
      }
      
    } catch (err) {
      console.error(err);
      alert('Error logging user');
    }
  };

  const handleDisplay = ()=>{
    setDisplayUser(true);
  }


  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-custom via-yellow-200 to-white">
      <div className="bg-white w-full max-w-md p-5 rounded-md shadow-2xl"> 

        <h2 className="text-2xl font-bold text-gray-700 text-center pt-3 pb-3">Sign In</h2>

        <form className="flex flex-col items-center justify-between gap-5 pb-2" onSubmit={handleSubmit}>
          <div>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              className="border border-gray-400 focus:outline-blue-400 px-3 py-2 rounded-md w-[20em] max-w-full hover:border-gray-700 hover:placeholder:text-gray-700"
              placeholder="Email"
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <input 
              type="password" 
              id="password" 
              name="password"
              value={formData.password}
              className="border border-gray-400 focus:outline-blue-400 px-3 py-2 rounded-md w-[20em] max-w-full hover:border-gray-700 hover:placeholder:text-gray-700"
              placeholder="Password"
              onChange={handleChange} 
              required 
            />
          </div>
        

        <div className="flex items-center justify-center gap-4 p-3">
          <button 
          className="text-white font-bold bg-blue-400 px-8 py-2 rounded-md cursor-pointer hover:bg-blue-500" type="submit"
          onClick={handleDisplay}
          >Sign In</button>
          <button className="border border-blue-500 text-blue-500 bg-white px-8 py-2 rounded-md hover:bg-blue-50 cursor-pointer">Cancel</button>
        </div>
        </form>
        <div className="flex ml-11">
          <h2>Not Registered?</h2>
          <span className="text-blue-500 cursor-pointer hover:underline ml-1" onClick={()=>navigate('/signUp')}>SignUp</span>
        </div>


      </div>
    </div>
  );
}

export default SignInPage;
