import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight} from "react-icons/hi";
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

function Slider() {
    const [movieList, setmovieList] = useState([])

    const elementRef = useRef()
    const screenWidth = window.innerWidth-108;

    useEffect(()=>{
        getTrendingMovies();
    },[])

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            //console.log(resp.data.results);
            setmovieList(resp.data.results);
        })
    }

    const sliderRight=(element)=>{
        console.log(element)
        element.scrollLeft+=screenWidth;
    }

    const sliderLeft = (element)=>{
        console.log(element)
        element.scrollLeft-=screenWidth;
    }

  return (
    <div>
        <HiChevronLeft className='hidden md:block absolute text-[30px] mx-8 mt-[150px] cursor-pointer'
            onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className='hidden md:block absolute text-[30px] mx-8 mt-[150px] cursor-pointer right-0' onClick={()=>sliderRight(elementRef.current)}/>
        
        
        <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
        {movieList.map((item,index)=>(
            <img src={IMAGE_BASE_URL+item.backdrop_path} alt="image" 
                className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[3px] border-gray-600 transition-all duration-100 ease-in-out'  />
        ))}
        </div>
    </div>
  )
}

export default Slider
