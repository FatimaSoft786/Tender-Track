import React from 'react'
import logo from "../images/logo.svg"
const Footer = () => {
  return (
    <div className=' flex flex-row sm:flex-col h-auto justify-evenly bg-primary mt-5'>
    <div className=' flex flex-col mx-0 sm:mx-2 py-2 '>
    <img className='w-[200px] h-[100px]' src={logo} alt='logo'/>
    <p className=' w-[50%] sm:w-full leading-[20px] text-white font-roboto  font-medium text-[16px]'>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet cosectetur lorem ipsum.</p>
    </div>
   
   <div className=' flex flex-col py-2 gap-3 sm:justify-center sm:items-center text-white'>
   <p className='font-roboto font-semibold text-[16px]'>Pages</p>
  <p className='font-roboto font-medium text-[16px]'>Home</p>
  <p className='font-roboto font-medium text-[16px]'>Partners</p>
  <p className='font-roboto font-medium text-[16px]'>Service</p>
  <p className='font-roboto font-medium text-[16px]'>Contact</p>
   </div>

    <div className=' flex flex-col py-2 gap-3 sm:justify-center sm:items-center text-white'>
   <p className='font-roboto font-semibold text-[16px]'>Contact Us</p>
  <p className='font-roboto font-medium text-[16px]'>info@tendertrack.com</p>
  <p className='font-roboto font-medium text-[16px]'>+123 456 7890</p>
   </div>

    </div>
  )
}

export default Footer