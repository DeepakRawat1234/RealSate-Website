import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
const Testimonials = () => {
  return (
    <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration under font-light'>Testimonals</span></h1>
<p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real Stories form those who Found Home With Us</p>
<div className='flex flex-wrap justify-center gap-8'>
   {testimonialsData.map((test,index)=>{
return(
    <div key={index} className='max-w-[310px] border shadow-lg rounded px-8 py-12 text-center'>
        <img src={test.image} alt={test.alt} className='w-20 h-20 rounded-full mx-auto mb-4' />
        <h2 className='text-xl text-gray-700 font-medium'>{test.name}</h2>
        <p className='text-gray-500 mb-4 text-sm'>{test.title}</p>
        <div className=' flex justify-center gap-1 text-red-500 mb-4'>
            {Array.from({length:test.rating},(item,index)=>{
               return ( <img key={index} src={assets.star_icon}  />)
            })}
        </div>
        <p>{test.text}</p>
    </div>
)
   })

   } 
</div>
    </div>
  )
}

export default Testimonials