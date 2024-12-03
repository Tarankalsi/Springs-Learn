"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'
import {toast} from "react-hot-toast";

const  Dashboard = () => {
  const router = useRouter();


  const logOutHandler = async () => {
    try {
      await axios.get('/api/user/logout')
      toast.success('Logout successful')
      router.replace('/')
  } catch (error) {
      toast.error(error.message)
  }
  }
  return (
    <div className=''>Dashboard
        <button onClick={logOutHandler}>logout</button></div>

  )
}

export default Dashboard;