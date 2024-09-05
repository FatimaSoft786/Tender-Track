import React from 'react'
import email from "../images/home.svg"
import img1 from "../images/img1.svg"
import arrow from "../images/arrow.svg"
import image from "../images/image.svg"
const Partners = () => {
 const data = [
    {
      "id": "1",
      "title": "Aerospace"
    },
    {
       "id": "2",
       "title": "Construction"
    },
    {
        "id": "3",
        "title": "Defense"
    }
  ]

   const data1 = [
    {
      "id": "1"
    },
    {
       "id": "2"
    },
    {
        "id": "3"
    }
  ]

  return (
   <div className=' flex flex-col mx-7'>
   <div className='flex flex-row justify-between xs:flex-col sm:flex-col gap-4 mt-5'>
    <div className=' flex flex-col justify-start mt-3'>
     <p className=' font-semibold text-[34px] font-roboto'>TenderTrack</p>
     <div className=' bg-black h-1 w-[37%] sm:w-[60%]'></div>
     <p className=" text-[16px] font-normal text-gray px-0 mt-4 font-roboto">
        TenderTrack specializes in delivering comprehensive market intelligence and tender reports tailored to various sectors. Our services are designed to help businesses navigate the competitive tender landscape with precise insights, competitor analysis, and strategic recommendations. 
     </p>
    
    <p className=" text-[16px] font-normal text-gray px-0 mt-4 font-roboto">We provide a weekly report format that includes:</p>
    <p className=" text-[16px] font-normal text-gray px-0 mt-1 font-roboto">Detailed listings of relevant tenders across various sectors.</p>
    <p className=" text-[16px] font-normal text-gray px-0 mt-1 font-roboto">Analysis of key competitors with strengths and weaknesses.</p>
    <p className=" text-[16px] font-normal text-gray px-0 mt-1 font-roboto">Personalized recommendations to improve your bidding success.</p>
    <p className=" text-[16px] font-normal text-gray px-0 mt-1 font-roboto">Adaptative pricing from $100 to $999 per report, with expert support available.</p>
    <p className=" text-[16px] font-normal text-gray px-0 mt-1 font-roboto">Your first report is free, allowing you to experience the value of TenderTrack without commitment.</p>

    </div>
   <img className='' src={email} alt='email'/>
  
   </div>

   <div className=' flex justify-center items-center flex-col mt-8 '>
   <p className=' font-semibold text-[34px] sm:text-[28px] font-roboto'>Our Services by Sectors</p>
     <div className=' bg-black h-1 w-[30%] sm:w-[93%]'></div>
   
   <div className=' grid grid-cols-3 sm:grid-cols-1 gap-3 mt-10'>
   {
    data.map((e)=>(
        <div key={e.id} className=' flex flex-col'>
   <img src={img1} alt=''/>
   <div className=' bg-gray1 rounded-b-xl p-4'>
    <div className=' flex flex-row justify-between gap-2'>
    <div className='flex flex-row gap-2'>
        <div className=' bg-primary w-1 h-12'></div>
    <p className=' text-[16px] font-semibold mt-3'>{e.title}</p>
    </div>
    <img className=' w-10 h-10' src={arrow} alt=''/>
    </div>
   </div>
   </div>
    ))
   }
   </div>

   </div>

   <div className=' flex justify-center items-center flex-col mt-8 '>
   <p className=' font-semibold text-[34px] sm:text-[28px] font-roboto'>Our Trusted Partners</p>
     <div className=' bg-black h-1 w-[27%] sm:w-[87%]'></div>
   
   <div className=' grid grid-cols-3 sm:grid-cols-1 gap-10 mt-10'>
   {
    data1.map((e)=>(
        <div key={e.id} className=' flex flex-col'>
   <img src={image} alt=''/>
   
   </div>
    ))
   }
   </div>

   </div>

   </div>
  )
}

export default Partners