import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';

function MoiveList({genreId, index_}) {

    const [MoiveList, setMoiveList] = useState([])

    const elementRef=useRef(null);
    

    useEffect(() => {
        getMoviesByGenreId();
    }, [])
    

    const getMoviesByGenreId =()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            console.log(resp.data.results);
            setMoiveList(resp.data.results);
        })
    }

    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }

  return (
    <div className='relative'>
        <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className={`text-[50px] text-white
           p-2 z-10 cursor-pointer  top-12
            hidden md:block absolute
            ${index_%3==0?'mt-[15px]':'mt-[100px]'}`}/>

        <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-hide pt-5 px-2 pb-5 scroll-smooth'>
            {MoiveList.map((item,index)=>(
                <>
                {index_%3==0? <HrMovieCard movie={item}/> : <MovieCard movie={item}/>}
                </>
            ))}
        </div>

        <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-12
            absolute right-0 ${index_%3==0?'mt-[15px]':'mt-[100px]'}`}/> 
    
    </div>
  )
}

export default MoiveList
