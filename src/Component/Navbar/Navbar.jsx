import React from 'react';
import { IoHomeSharp } from "react-icons/io5";
import { NavLink } from 'react-router';
import { MdMoreTime } from "react-icons/md";
import { BiSolidDashboard } from "react-icons/bi";
const Navbar = () => {
    const navLinkClass = ({ isActive }) =>
        `font-semibold pb-[5px] ${isActive ? 'btn-success' : ''}`;
    return (
        <div className='shadow bg-white sticky top-0 z-50'>
            <div className='container mx-auto flex justify-between py-4'>
                <div>
                    <h1 className='text-[24px]'><span className='font-bold text-[#1f2a38]'>Keen</span><span className='font-semibold text-[#244d3f]'>Keeper</span></h1>
                </div>
                {/* menu section */}
                <div className='flex gap-4'>
                    <NavLink className={navLinkClass} to={'/'}>
                        <button className='flex items-center gap-1 btn'><span><IoHomeSharp /></span>Home</button>
                    </NavLink>
                    <NavLink className={navLinkClass} to={'/timeline'}>
                        <button className='flex items-center gap-1 btn'><span><MdMoreTime /></span>Timeline</button>
                    </NavLink>
                    <NavLink className={navLinkClass} to={'/states'}>
                        <button className='flex items-center gap-1 btn'><span><BiSolidDashboard /></span>States</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;