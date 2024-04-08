import React from 'react'
import GenresList from '../Constant/GenresList'
import MoiveList from './MoiveList'

function GenreMovieList() {
  return (
    <div>
      {GenresList.genere.map((item,index)=>index<=4 &&(
        <div className=' p-4 px-10 md:p-8 md:px-16'>
            <h2 className='text-[20px] font-bold'>{item.name}</h2>
            <MoiveList genreId={item.id} index_={index}/>
        </div>
      ))}
    </div>
  )
}

export default GenreMovieList
