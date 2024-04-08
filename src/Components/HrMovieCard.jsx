import React from 'react'

const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

function HrMovieCard({movie}) {
  return (
    <div className='hover:scale-110 transition-all duration-150 ease-in cursor-pointer'>
      <img src={IMAGE_BASE_URL+movie.backdrop_path} alt="" 
        className='w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-600 hover:scale-110
             transition-all duration-150 ease-in cursor-pointer' />
        <h2 className='w-[110px] md:w-[200px] mt-2'>{movie.title}</h2>
    </div>

  )
}

export default HrMovieCard
