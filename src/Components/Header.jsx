import React, { useState } from 'react'
import logo from './../assets/images/logo.png'
import { HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";
import Headeritem from './HeaderItem';



function Header() {
  const [toggle, settoggle] = useState(false)
  const menu=[
    {
        name:'HOME',
        icon:HiHome
    },
    {
        name:'SEARCH',
        icon:HiMagnifyingGlass
    },
    {
        name:'WATCH LIST',
        icon:HiPlus
    },
    {
        name:'ORIGINALS',
        icon:HiStar
    },
    {
        name:'MOVIES',
        icon:HiPlayCircle
    },
    {
        name:'SERIES',
        icon:HiTv
    }
]


  return (
    <div className='flex items-center justify-between p-5'>
      <div className='flex items-center gap-6'>

        <img src={logo} alt="logo" className='w-[80px] object-cover md:w-[115px]'/>
        <div className='hidden md:flex gap-6'>
          {menu.map((item)=>(
            <Headeritem name={item.name} Icon={item.icon}/>
          ))}
        </div>
        
        {/* responsive menu */}
        <div className='md:hidden flex gap-5'>
          {menu.map((item,index)=>index<3&&(
            <Headeritem name={''} Icon={item.icon}/>
          ))}

          <div>
            <div onClick={()=>settoggle(!toggle)}>
              <Headeritem name={''} Icon={HiDotsVertical}/>
            </div>
            {toggle && <div className='absolute border-[1px] p-2 mt-3 bg-[#121212] border-gray-700'>
              {menu.map((item,index)=>index>2&&(
                <Headeritem name={item.name} Icon={item.icon}/>
              ))}
            </div>}
          </div>

        </div>

      </div>
      <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="user" 
        className='w-[40px] rounded-full'/>
    </div>
  )
}

export default Header
