import React from 'react'

function HeaderItem({name, Icon}) {
  return (
    <div className='m-2 text-white flex items-center gap-1 md:gap-3 text-[15px] font-semibold cursor-pointer'>
      <Icon/>
      <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItem
