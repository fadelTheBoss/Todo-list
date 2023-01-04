import React from 'react'
import {HiOutlineDownload} from 'react-icons/hi';
import {VscAccount} from 'react-icons/vsc';
const Navbar = () => {
  return (
    <nav className='h-[50px] mx-6 mt-2 flex items-center justify-between '>
        <div className='mr-2'>
            <h2 className=' text-xl font-poppins font-bold' >Todo-list</h2>
        </div>
        <ul className='xs:flex items-center gap-x-5 mr-4 hidden '>
            <li className='rounded-md bg-cyan-500 text-white p-1 cursor-pointer hover:scale-90'>
              Creat acount
            </li>
            <li>
            <VscAccount size={30} className='cursor-pointer hover:scale-90' />
            </li>
            <li className='rounded-md bg-cyan-500 text-white p-1 cursor-pointer hover:scale-90 '>
                Download
            </li>
            <li>
              <HiOutlineDownload size={30} className='cursor-pointer hover:scale-90'/>
            </li>

        </ul>
    </nav>
  )
}

export default Navbar