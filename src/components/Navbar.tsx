import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'
import NavIcons from './NavIcons'
import SearchBar from './SearchBar'

const Navbar = () => {
    return (
        <nav className=' h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
            <div className=' md:hidden flex justify-between items-center h-full'>
                <Link href="/" className=' text-2xl tracking-widest' >Store Sphere</Link>
                <Menu />
            </div>
            
            <div className=' hidden md:flex h-full w-full justify-between items-center'>
                <div className=" w-1/3 flex gap-4">
                    <Image src="/logomy.png" width={30} height={30} alt='logo' />
                    <Link href="/" className=' text-2xl tracking-widest' >Store Sphere</Link>
                </div>
                <div className=" w-2/3 flex justify-between items-center">
                    <SearchBar />
                    <NavIcons />
                </div>
            </div>
        </nav>
    )
}

export default Navbar