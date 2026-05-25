import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../features/auth/authSlice';


const Login = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
  });

  const user = useSelector((state) => state.auth)
  console.log("user : ",user)
 
  const dispatch = useDispatch()
  

  const handleChange = (e) => {
   
    setFormData({...formData,[e.target.name] : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', formData.userName);
    console.log('Email:', formData.email);
    console.log('Password:', formData.password);
    dispatch(setUser(formData))
    setFormData({
        userName: '',
    email: '',
    password: '',
  
    })
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  
      
        

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name='userName'
                value={formData.userName}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name='password'
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
              Sign In
            </button>
          </form>
   
 
    </div>
  );
};

export default Login;
