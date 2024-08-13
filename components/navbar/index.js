'use client'
import { Search, MapPin, LogIn,Backpack } from 'lucide-react';
import Image from "next/image";
import Logo from '@/images/logoTimeTeat.jpg'

export const Navbar = () => {
  return(
    <nav className=" grid grid-cols-12 py-4 bg-white border-b shadow sticky top-0">
      <div className="col-start-2 text-white font-bold text-xl col-span-2 flex items-center max-h-[2rem]">
        <Image src={Logo} alt="logo" height="2rem"/>
      </div>
      <div className="col-span-5 flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="border-r-0 rounded-l-[50px] border w-[80%] h-[2rem] px-2 py-1 inline-block focus:ring-0 focus:outline-none text-black"
        />
        <button className='w-[20%] border rounded-r-[50px] col-span-1 h-[2rem]'>
          <Search size='1rem' className={'m-auto mr-[calc(50%-.4rem)] text-black'}/>
        </button>
      </div>
      <div className='flex items-center justify-center'>
        <MapPin size='1.5rem'/>
        <div className="text-[.9rem]">
          location...
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <LogIn size='1.5rem'/>
      </div>
      <div className='flex items-center justify-center'>
        <Backpack className='mr-1' size='1.5rem'/>
        <div>
          <div className="text-[.7rem]">
            R$0,00
          </div>
          <div className="text-gray-300 text-[.6rem]">
            0 itens
          </div>
        </div>
      </div>
    </nav>
  )
}