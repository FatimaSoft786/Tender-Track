import React,{useEffect,useState,useRef} from 'react'
import call from "../images/call.svg";
import email from "../images/email.svg"
import { useForm } from "react-hook-form";
const Contact = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  return (

    <div className=' flex bg-white justify-center items-center my-3'>
     <div className=' flex flex-col bg-primary w-[70%] h-auto rounded-[10px]'>
     <div className='justify-center items-center'>
     <div className=' flex flex-col items-center'>
    <p className=' text-center py-5 text-white font-semibold text-[16px] items-center w-full'>Have questions or ready to get started? Reach out to us today!</p>
     </div>
     </div>
     
    <div className=' flex flex-row sm:flex-col justify-evenly gap-6'>
    <div className=' flex flex-col sm:w-[90%] mx-2 w-[40%]'>
    <p className=' font-roboto font-medium text-white'>First name</p>
    <input className=' w-full h-10 rounded outline-none px-2'></input>
    </div>

    <div className=' flex flex-col sm:w-[90%] mx-2 w-[40%]'>
    <p className=' font-roboto font-medium text-white'>Last name</p>
    <input className=' w-full h-10 rounded outline-none px-2'></input>
    </div>
    </div>

<div className=' flex flex-row justify-evenly gap-6'>
    <div className=' flex flex-col w-[88%] mt-4'>
    <p className=' font-roboto font-medium text-white'>Message</p>
    <textarea className=' w-full rounded outline-none px-2 h-[150px]'></textarea>
    </div>

    </div>
    
    <div className=' py-2 text-black bg-white w-1/3 sm:mx-5 mx-12 items-center justify-center rounded-[10px] sm:px-0 px-20 my-11'>
   <p className=' w-full sm:mr-3 text-center items-center'>Submit</p>
    </div>

     </div>
    </div>    
  )
}

export default Contact