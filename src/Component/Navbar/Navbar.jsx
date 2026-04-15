import React, { useState } from 'react';
import { IoHomeSharp, IoClose, IoMenu } from "react-icons/io5";
import { NavLink } from 'react-router';
import { MdMoreTime } from "react-icons/md";
import { BiSolidDashboard } from "react-icons/bi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        `flex items-center gap-1 btn ${isActive ? 'btn-success' : ''}`;

    return (
        <div className='shadow bg-green-200 sticky top-0 z-50'>
            <div className='container mx-auto flex justify-between items-center py-4 px-4'>
                
                <h1 className='text-[24px]'>
                    <span className='font-bold text-[#1f2a38]'>Keen</span>
                    <span className='font-semibold text-[#244d3f]'>Keeper</span>
                </h1>


                <div className='hidden md:flex gap-4'>
                    <NavLink className={navLinkClass} to={'/'}>
                        <IoHomeSharp />Home
                    </NavLink>
                    <NavLink className={navLinkClass} to={'/timeline'}>
                        <MdMoreTime />Timeline
                    </NavLink>
                    <NavLink className={navLinkClass} to={'/states'}>
                        <BiSolidDashboard />States
                    </NavLink>
                    
                </div>
                <button className='md:hidden btn btn-ghost text-xl'
                    onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <IoClose /> : <IoMenu />}
                </button>
            </div>
            {menuOpen && (
                <div className='md:hidden flex flex-col gap-2 px-4 pb-4'>
                    <NavLink className={navLinkClass} to={'/'} onClick={() => setMenuOpen(false)}>
                        <IoHomeSharp />Home
                    </NavLink>
                    <NavLink className={navLinkClass} to={'/timeline'} onClick={() => setMenuOpen(false)}>
                        <MdMoreTime />Timeline
                    </NavLink>
                    <NavLink className={navLinkClass} to={'/states'} onClick={() => setMenuOpen(false)}>
                        <BiSolidDashboard />States
                    </NavLink>
                </div>
            )}
        </div>
    );
};

export default Navbar;