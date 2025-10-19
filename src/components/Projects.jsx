import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'

const Projects = () => {
    const [currentindex,setCurrendindex]=useState(0);
    const [cardstoshow,setCardstoshow]=useState(1);

    useEffect(()=>{
        const updatecardtoshow=()=>{
            if(window.innerWidth>=1024){
                setCardstoshow(projectsData.length)
            }
            else{
                setCardstoshow(1)
            }}
            updatecardtoshow();
            window.addEventListener('resize',updatecardtoshow);
            return ()=>window.removeEventListener('resize', updatecardtoshow)
        
    },[])
    const nextproject=()=>{
        setCurrendindex((prev)=>(prev+1)%projectsData.length);
    }
    const prevproject=()=>{
        setCurrendindex((prev)=> prev===0?projectsData.length-1:prev-1)
    }
  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Project <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Space, Buliding Legacies-Explore Our Portfolio</p>
        {/* slider button */}
        <div className='flex justify-end items-center mb-8 gap-2'>
            <button onClick={prevproject}
             className='p-3 bg-gray-200 roundedmr-2' aria-label='Previous Project'><img src={assets.left_arrow} alt="Prev" /></button>
             <button
              onClick={nextproject} className='p-3 bg-gray-200 roundedmr-2' aria-label='Previous Project'><img src={assets.right_arrow} alt="Next" /></button>
        </div>

        {/* project slider container */}
        <div className='overflow-hidden'>
            <div className='flex gap-5 transition-transform duration-500 ease-in-out'
            style={{transform:`translateX(-${(currentindex*100)/cardstoshow}%)`}}
            >
                {projectsData.map((project,index)=>{
                    return(
<div key={index} className='ralative flex-shrink-0 w-full sm:w-1/4'>
    <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
    <div className='relative left-0 right-0 bottom-20 flex justify-center'>
        <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
<h2 className='text-xl font-semibold text-gray-800'>
    {project.title}
</h2>
<p className='text-gray-500 text-sm'>
    {project.price} <span>|</span> {project.location}
</p>
        </div>
    </div>
</div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Projects